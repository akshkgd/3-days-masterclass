// currency converter app, bill split App
// variables, Functions, DOM

// varaibles => var=>es5, es6 => let and const

let coffee = 'brew';
coffee = 'nescafe'

let name = 'ashish'
let email = 'ashish@gmail.com'

// functions 
function grinder(items){
    console.log('grinding...', items)
}
// grinder('tomatoes');
// grinder('garlic');

function add(num1, num2){
    console.log('The sum is: ', num1 + num2)
}

// add(12,13)
// add(89,90)

function feedback(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for the feedback!';
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}

function convert(){
    let usd = document.getElementById('usd').value;
    let inr = (usd * 81.24).toFixed(2);
    document.getElementById('inr').value = inr;
}