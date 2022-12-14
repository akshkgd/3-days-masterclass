// currency converter
// cube counter
// atleast 100 projects easily

//variables, functions and DOM
//variables => temp storage => let, const and var

let email = 'ashish@gmail.com';
email = 'yash@gmail.com';
// console.log(email)

function grinder(){
    console.log('grinding...')
}

// we need to call the function
grinder()
// grinder()

function joined(){
    document.getElementById('title').innerHTML = 'Thanks for joining the masterclass.'
}
function calculateCube(){
    let number = document.getElementById('number').value;
    document.getElementById('cube').innerHTML =  (number * number * number)
}


function convertUsd(){
    let usd = document.getElementById('usd').value;
    let inr = (usd * 79.73).toFixed(2);
    document.getElementById('inr').innerHTML = inr;
}