// currency converter app
// cube counter app
// variables, functions, DOM
//alteast 100 projects easily 

//variables -> var, let and const

let email = 'ashish@gmail.com';
email = 'yash@gmail.com'
// console.log(email);


//functions

function grinder(){
    console.log('grinding...')
}
// grinder();
// grinder();
// grinder();

function joined(){
    document.getElementById('title').innerHTML = 'Thanks for Joining!!'
}

function toInr(){
    let usd = document.getElementById('usd').value;
    let inr = (usd * 79.90).toFixed(2)
    document.getElementById('inr').innerHTML = inr;
}