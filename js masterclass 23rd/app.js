// varaibles, Functions, DOM
// currency converter app
// bill split application

// varibles => var, let and const 

let coffee = 'brew';
coffee = 'nescafe';

let name = 'ashish'
// console.log(name)

// functions 
function grinder(items){
  console.log('grinding...', items)  
}

// grinder('tomatoes');
// grinder('garlic');

function add(num1, num2){
    console.log(num1 + num2)
}

// add(2,3);
// add(100, 898);
// add(23323,3232)

function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the masterclass live! 🥳';
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}
function usdToInr(){
    let usd = document.getElementById('usd').value;
    document.getElementById('inr').value = (usd * 82.84).toFixed(2)
}