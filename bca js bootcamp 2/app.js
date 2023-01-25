// variables, functions, DOM
// bill split app, currency converter app

// varaibles => var, let and const

let coffee = 'brew';
coffee = 'nescafe';

let email = 'ashish@codekaro.in'
// console.log(email);

// functions
function grinder(){
    console.log('grinding...')
}
// grinder()
// grinder()

function feedback(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for the feedback 😁';
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}
function convert(){
    let usd = document.getElementById('usd').value;
    let inr = (usd * 80.98);
    document.getElementById('inr').value = inr;
}