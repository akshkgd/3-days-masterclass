//currency converter -> from usd to inr
//bill splitting application

//variables, functions, DOM
// var -> var, let and const 
let email = 'ashish@gmail.com';
email = 'arpit@codekaro.in'
// var name = 'ashish';
// const mobile = 1234444;
// console.log(email);

// function grinder(items){
//     console.log('grinding...', items)
// }

// grinder('tomatoes');
// grinder('onion');

function btnClick(){
    document.getElementById('title').innerHTML = 'Button clicked...'
}

function convertUsd(){
    let usd = document.getElementById('usd').value;
    let inr = (usd*79.79).toFixed(2)
    document.getElementById('inr').innerHTML = inr;
}