// bill split application, currency converter app
// varaibles, Functions, DOM



// variables => var, let and const 
let coffee = 'brew'
coffee = 'nescafe'
let email = 'ashish@codekaro.in'

// functions
function grinder(){
    console.log('grinding...')
}

function feedback(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for the Feedback!'
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}

function convert(){
    let usd = document.getElementById('usd').value;
    let inr = (usd * 81.61);
    document.getElementById('inr').value = inr;
}