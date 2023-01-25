// currency converter app
// bill split application
// variables, functions and DOM

// variables => temp storage => var, es6=> let and const 

let coffee = 'brew';
coffee = 'nescafe';

let name = 'ashish'
let age = 25;
// console.log(name, age)


// functions =>

// function grinder(items){
//     console.log('grinding...', items)
// }

// grinder('tomaotes');
// grinder('garlic');


function add(num1, num2){
    console.log(num1+num2)
}

// add(2,3)
// add(5,5)

function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the masterclass live! 😁';
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}

function usdToInr(){
    let usd = document.getElementById('usd').value;
    let inr = (usd * 82.73).toFixed(2);
    document.getElementById('inr').innerText = inr;
}