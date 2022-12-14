// console.log('app.js is connected!!')
// currency converter app
// bill split application
// variables, functions, DOM

// variables => var, es6 => let and const


// let coffee = 'brew';
// coffee = 'nescafe'

// console.log(coffee)

// functions
// function grinder(items){
//     console.log('grinding...', items)
// }

// grinder('tomatoes');
// grinder('garlic');

function add(num1, num2){
    console.log(num1 + num2)
}

// add(2,3)
// add(30, 80)

function joined(){
    let title  = document.getElementById('title');
    title.innerText = 'Thanks for joining the masterclass! 🎉';
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}

function usdToInr(){
    let usd = document.getElementById('usd').value;
    let inr = (usd * 82.48);
    document.getElementById('inr').innerText = inr
}
function split(){
    let amount = document.getElementById('amount').value;
    let persons = document.getElementById('persons').value;
    // let bill = (amount / persons).toFixed(2);
    let bill =  Math.floor(amount / persons);

    document.getElementById('bill').innerText = bill
}