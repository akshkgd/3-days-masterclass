// currency converter
// bill split application
// variables, functions, DOM 


// console.log('app.js is connected!!')
// variables => var, es6 => (let and const)
let email = 'ashish@gmail.com';
email = 'yash@gmail.com';

// functions => 
// function grinder(items){
//     console.log('grinding...', items)
// }

// grinder('tomatoes');
// grinder('garlic');

function add(num1, num2){
    console.log(num1 + num2)
}

// add(2,3)
// add(200,400)


function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the masterclass! 🥳';
    let btn = document.getElementById('btn');
    btn.style.display = 'none';
}

function usdToInr(){
    let usd = document.getElementById('usd').value;
    let inr = (usd * 82.42).toFixed(2);
    document.getElementById('inr').innerText = inr;
}