// currency converter
// bill split application
// variables, functions and DOM

// console.log('app.js is connected!!')

//varaiables => temp storage sued to store the data
// let and const 
let email = 'ashish@gmail.com';
email = 'yash@gmail.com'
console.log(email)

// functions
function grinder(items) {
    console.log('grinding...', items)
}
// var are containers
// grinder('tomatoes');
// grinder('potatoes');


function add(num1,num2){
    console.log(num1 + num2)
}

// add(2,3)
// add(10,20)


function joined(){
    document.getElementById('title').innerHTML = 'Thanks for joining the Masterclass! 🎉'
    document.getElementById('btn').style.display = 'none';
}

function usdToInr(){
    let usd = document.getElementById('usd').value;
    let result = (usd * 80.50);
    document.getElementById('result').innerHTML = result;
}