// currency converter application
// bill split application

// console.log('app.js is connected!!')

// variables => var, let and const 

let coffee = 'brew';
coffee = 'nescafe';
// console.log(coffee)

// functions
function grinder(items){
    console.log('grinding...', items)
}


// grinder('tomatoes');
// grinder('garlic');

function add(num1, num2){
    console.log(num1 + num2)
}
add(2,3)

function joined(){
   let title = document.getElementById('title');
   title.innerText = 'Thanks for joining the masterclass live! 🥰';
   let btn = document.getElementById('btn');
   btn.style.display = 'none';
}
function usdToInr(){
    let usd = document.getElementById('usd').value;
    let inr = (usd * 82.68);
    document.getElementById('inr').innerText = inr;
}