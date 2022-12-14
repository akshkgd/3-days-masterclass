// var, funcitons, DOM
// currency converter app, bill split App


// console.log('app.js is connected!!');
// var => var, let and const
let email = 'ashish@gmail.com';
email = 'yash@gmail.com';
// console.log(email);

// functions
function grinder(items){
    console.log('grinding...', items)
}
// grinder('tomatoes');
// grinder('potatoes');

function add(num1, num2){
    console.log(num1 + num2)
}
// add(2,3)
// add(10, 10)
// add(50,90)

function joined(){
   let title =  document.getElementById('title');
   title.innerText = 'Thanks for joining the masterclass! 😍';
   let btn = document.getElementById('btn');
   btn.style.display = 'none'
//    btn.style.backgroundColor = 'blueviolet'
}

function usdToInr(){
    let usd = document.getElementById('usd').value;
    let inr = (usd * 81.67).toFixed(2);
    document.getElementById('inr').innerText = inr;
    document.getElementById('usd').value = ''
}

function splitBill(){
    let amount  = document.getElementById('amount').value;
    let persons = document.getElementById('persons').value;
    let bill = amount / persons;
    document.getElementById('bill').innerHTML = bill;
}