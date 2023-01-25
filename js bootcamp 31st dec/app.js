// varibles, funcitons, DOM 
// currency converter, bill split application

// console.log('app.js is connected');
// variables => var, let and const

let coffee = 'brew';
coffee = 'nescafe'
let email = 'ashish@gmail.com'


// functions
function grinder(items){
    console.log('grinding...', items)
}

// grinder('tomatoes');
// grinder('garlic');

function add(num1, num2){
    console.log(num1 + num2)
}

// add(2,3)
// add(13,14)


function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the masterclass live! 🥳';
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}
function usdToInr(){
    let usd = document.getElementById('usd').value;
    let inr = (usd * 82.75)
    document.getElementById('inr').value = inr;
}