// variables, functions, DOM
// bill split application, Currency converter App

// console.log('app.js is connected!!')

// variables => var, let and const

let email = 'ashish';
// console.log(email);

// functions
function grinder(){
    console.log('grinding...')
}
grinder()
grinder()

function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the Bootcamp 🤩'
    let btn = document.getElementById('btn')
    btn.style.display = 'none'
}

function split(){
    let amount = document.getElementById('amount').value;
    let persons = document.getElementById('persons').value;
    let bill = Math.floor(amount / persons)
    document.getElementById('result').innerText = bill;
}