// variables, functions, DOM
// currency converter app, bill split application

// variables => var, (let and const)

let coffee = 'brew';
coffee = 'nescafe';


// functions
function grinder(items){
    console.log('grinding...', items)
}

// grinder('tomatoes');
// grinder('garlic');

function add(num1, num2){
    console.log('The sum is ', num1 + num2 )
}
// add(2,3)
// add(300,898)

function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the masterclass! 🥳'
}

function usdToInr(){
    let usd = document.getElementById('usd').value;
    let inr = (usd * 81.80).toFixed(2);
    document.getElementById('inr').value = inr;
}

function split(){
    let amount = document.getElementById('amount').value;
    let persons = document.getElementById('persons').value;

    let bill = (amount / persons).toFixed(2);
    document.getElementById('bill').innerText = bill;
}