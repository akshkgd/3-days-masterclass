// bill split application => 3000 projects
// var, functions and DOM

// console.log('app.js is connected!!')

// var => var, let and const 
let email = 'ashish@gmail.com'
let address = 'allahabad'
// console.log(email, address)

// functions
function grinder(){
    console.log('grinding...')
}

// grinder();
// grinder()

function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the masterclass 🎉';
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}

function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');
    let bill = (amount.value / persons.value);
    document.getElementById('bill').innerText = bill;
}