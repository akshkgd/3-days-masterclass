// currency converter application
// bill split application
// js variables, js functions, js DOM


// console.log('app.js is connected!!')

// variables => var => ES6 => let and const

// let coffee = 'brew, nescafe';


// let email = 'ahish@gmail.com';
// console.log(email);
// console.log(coffee);


// functions

// function grinder(items){
//     console.log('grinding...', items)
// }

// grinder('tomatoes');
// grinder('garlic');
function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the masterclass 🎉'
    let btn = document.getElementById('btn');
    btn.style.display= 'none'
}

function usdToInr(){
    let usd = document.getElementById('inputUsd').value;
    let cInr = (usd * 82.42).toFixed(2);
    document.getElementById('inputInr').value = cInr;
}

function inrToUsd(){
    let inr = document.getElementById('inputInr').value;
    let cUsd = (inr / 82.42).toFixed(2);
    document.getElementById('inputUsd').value = cUsd;
}