// var, functions, DOM
// bill split application

// variables => es5 => var, es6 => let and const
let email = 'ashish@gmail.com';
// console.log(email);

// functions => ??
function grinder(){
    console.log('grinding...')
}
// grinder();
// grinder()

function joined(){
    let title = document.getElementById('title');
    console.log(title);
    title.innerText = "Thanks for joining the masterclass! 😎";
    let btn = document.querySelector('.btn');
    btn.style.display = 'none'
}


function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');

    let bill = amount.value / persons.value;
    document.getElementById('bill').innerText = bill
}