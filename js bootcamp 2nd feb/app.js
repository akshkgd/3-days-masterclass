// variables, Functions, DOM
// bill split application

// variables => var, let and const 

let email = 'ashish@gmail.com'
let address = 'allahabad'


// console.log(email, address)

// functions
function grinder(){
    console.log('grinding...')
}


// grinder()
// grinder();
// grinder();

function joined(){
    let title = document.getElementById('title');
    title.innerText = "Thanks for joining the bootcamp!"
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}

function split(){
    let amount = document.getElementById('amount').value;
    let persons = document.getElementById('persons').value;
    let bill = amount / persons
    document.getElementById('result').innerHTML = bill;
}