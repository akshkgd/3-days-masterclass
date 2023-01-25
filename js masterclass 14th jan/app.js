// varaibles, Functions, DOM
// currency converter app, bill split app

// variables => var, let and const
let coffee = 'brew';
coffee = 'nescafe';

let email = 'ashish@gmail.com'
email = 'yash@gmail.com'

// functions

function grinder(items){
    console.log('grinding...', items)
}

// grinder('tomatoes')
// grinder('garlic')


function add(num1, num2){
    console.log('The sum is: ', num1 + num2)
}

// add(3,4)
// add(5,5)
// add(1212,34434)

function joined(){
   let title = document.getElementById('title')
   title.innerText = 'Thanks for joining the masterclass live!!'
   let btn = document.getElementById('btn')
   btn.style.display = 'none'
}

function convert(){
    let usd = document.getElementById('usd').value;
    let inr = (usd * 81.29).toFixed(2);
    document.getElementById('inr').value = inr;

}