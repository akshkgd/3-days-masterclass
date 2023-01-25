// currency converter app, bill split aplication
// variables, functions, DOM

// variables => (var => es5), let and const

let coffee = 'brew';
coffee = 'nescafe';
let name = 'ashish';
let email = 'ashish@gmail.com'
// console.log(name, email)

// functions
function grinder(items){
    console.log('grinding...', items)
}


// grinder('tomatoes');
// grinder('garlic')

function add(num1, num2){
    console.log('The sum is: ', num1 + num2 )
}

// add(2,3)
// add(15,34343)
// add(232, 899)

function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the Bootcamp live!';
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}
function convert(){
    let usd = document.getElementById('usd').value;
    let inr = (usd * 81.27).toFixed(2);
    document.getElementById('inr').value = inr;
}