const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const mongoDbSession = require('connect-mongodb-session')(session )
const bcrypt = require('bcrypt')
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

const store = new mongoDbSession({
    uri: 'mongodb+srv://ashish:codekaro123@cluster0.cxwdzde.mongodb.net/?retryWrites=true&w=majority',
    collection: 'sessions'
})

app.use(session({
    secret: 'this is secret',
    resave: false,
    saveUninitialized: false,
    store: store,
}))

mongoose.connect('mongodb+srv://ashish:codekaro123@cluster0.cxwdzde.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('mongoDB is connected!')
})


// task schema
const taskSchema = new mongoose.Schema({
    task: String,
    dueDate: Date,
})

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})
// define the user model
const User = mongoose.model('User', userSchema);

const isAuth = (req,res,next)=>{
    if(req.session.isAuth){
        next()
    }
    else{
        res.redirect('/')
    }
}


// routes
app.get('/', (req,res)=>{
    console.log(req.session)
    res.render('login')
})
app.post('/login', async (req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        // return res.status(406).json({message: 'User does not exists'})
        res.redirect('/')
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(isPasswordValid){
        req.session.isAuth = true;
        req.session.name = user.name;
        res.redirect('/todos')
    }
    else{
        // return res.status(406).json({message: 'Password is wrong!!'})
        res.redirect('/')
    }
})
app.get('/register', (req,res)=>{
    res.render('register')
})
app.post('/add-user',async (req,res)=>{
    const {name, email, password} = req.body;
    console.log(name, email, password);
    // check if user exist
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(406).json({message: 'User already exists'})
    }
    // create user
    const user = new User({
        name: name,
        email: email,
        password: await bcrypt.hash(password, 10)
    });
    await user.save();
    res.redirect('/');
})
app.get('/todos',isAuth, async (req,res)=>{
    const Task = mongoose.model('ck-task', taskSchema);
    let data =await Task.find().sort({dueDate : "asc"});
    let newData = data.map((task)=>{
        let date = new Date(task.dueDate)
        formatDueDate = date.toLocaleDateString('en', { weekday: 'long', month: 'long', day: 'numeric' });
        return {task: task.task, dueDate: formatDueDate};
    })
    const name = req.session.name;
    res.render('home', {task: newData, name: name})
})

app.post('/add-task', (req,res)=>{
    const Task = mongoose.model('ck-task', taskSchema);
    let data = new Task({
        task: req.body.task,
        dueDate: req.body.dueDate
    })
    data.save()
    res.redirect('/todos')
})
app.post('/logout', (req,res)=>{
    req.session.destroy();
    res.redirect('/');
})

app.listen(3000, ()=>{
    console.log('Server running on port 3000')
})