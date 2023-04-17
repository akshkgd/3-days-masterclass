// Var, functions and DOM
// bill split application

// variables => var, let and const
let email = 'ashish@codekaro.in'
// console.log(email)

// functions
 
function grinder(){
    // logic
    console.log('grinding...')
}
// grinder();

function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the masterclass! 😎'
}

function split(){
    let amount  = document.getElementById('amount');
    let persons = document.getElementById('persons')
    let bill = amount.value / persons.value;
    document.getElementById('bill').innerText = bill;
}