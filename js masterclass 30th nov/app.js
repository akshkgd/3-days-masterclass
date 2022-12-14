// currency converter app
// bill split application
// variables, functions, DOM

// console.log('app.js is connected!!')
// varaibles =>(var) => es6 => let and const
let email = 'ashish@gmail.com';
email = 'yash@gmail.com'
// console.log(email)

// functions
function grinder(items){
    console.log('grinding...', items)
}
// grinder('tomatoes');
// grinder('garlic');

function add(num1, num2){
    console.log(num1 + num2)
}
// add(1,35)
// add(2,3)

function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the Masterclass!! 🥳';
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
    console.log(title)
}

function usdToInr(){
    let usd = document.getElementById('usd').value;
    let inr = (usd * 81.35).toFixed(2);
    document.getElementById('inr').innerText = inr;
}

function splitBill(){
    let amount = document.getElementById('amount').value;
    let persons = document.getElementById('persons').value;
    let bill = (amount / persons).toFixed(2);
    document.getElementById('bill').innerText = bill
}