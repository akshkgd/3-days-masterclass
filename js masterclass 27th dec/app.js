// var, functions, DOM

// variables  => var, let and const


let coffee = 'brew';
coffee = 'nescafe';

// functions
function grinder(items){
    console.log('grinding...', items)
}

// grinder('tomatoes');
// grinder('garlic');
// grinder('coffee')


function add(num1, num2){
    console.log( num1 + num2)
}


// add(2,3)
// add(13,24)

function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the masterclass! 🥳';
    let btn = document.getElementById('btn');
    btn.style.backgroundColor = 'tomato';
    btn.style.borderRadius = '40px'  
}
function usdToInr(){
    let usd = document.getElementById('usd').value;
    let inr = (usd * 82.87);
    document.getElementById('inr').value = inr;
}