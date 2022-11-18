// currency converter application
// bill split application
// variables, functions, DOM => 2000 + 

console.log('app.js is connected!!');
// variables => temp storage => container => es6 => let, var, const
let email = 'ashish@gmail.com';
email = 'yash@gmail.com'
// console.log(email)


// functions 
function grinder(items){
    console.log('grinding...', items)
}
// grinder('tomatoes');
// grinder('onions');

function add(num1, num2){
    console.log('The sum is: ', num1 + num2 )
}
// add(2,3)
// add(12,13)

function joined(){
    // let test = document.getElementById('title');
    // console.log(test)
    document.getElementById('title').innerText = 'Thanks for joining the masterclass! 😍'
    document.getElementById('btn').style.display = 'none';
}

function usdToInr(){
    let usd = document.getElementById('usd').value;
    document.getElementById('inr').innerText =   (usd * 81.68).toFixed(2)
}