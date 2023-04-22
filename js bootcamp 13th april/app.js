// var, functions and DOM
// Bill split application => 3000

// var => var(es5 => deprecited) es6 => let and const
let email = 'ashish@gmail.com'
// console.log(email)

// functions
function grinder(){
    // logic
    console.log('grinding...')
}

// grinder()
// grinder()

function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the bootcamp 😎'
    let btn = document.querySelector('.btn');
    btn.style.display = 'none'
}

function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');
    let bill = amount.value / persons.value;
    document.getElementById('bill').innerText = (bill)
}