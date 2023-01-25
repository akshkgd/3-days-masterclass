// varaibles, functions, DOM
// currency converter app, bill split app => (3000)

// console.log('app.js is connected!!')
// variables => var, let and const

let coffee = 'brew'
coffee = 'nescafe'
let email = 'ashish@gmail.com'
let name = 'ashish shukla'


// functions
function grinder(items){
    console.log('grinding...', items)
}

// grinder('tomatoes');
// grinder('garlic');

function add(num1, num2){
    console.log('The sum is: ', num1+num2)
}
// add(2,3)
// add(14,45)

function joined(){
    console.log('joined function called!!')
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the Bootcamp!!'
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}
function convert(){
    let usd = document.getElementById('usd').value;
    let inr = (usd * 80.98);
    document.getElementById('inr').value = inr;
}