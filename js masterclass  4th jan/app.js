// varaibles, functions, DOM
// currency converter app, bill split app
// 3000 projects on your own

// console.log('app.js is connected!!');
// variables => let, const, (var)

let coffee = 'brew';
coffee = 'nescafe'
let name = 'ashish';
let email = 'ashish@gmail.com';
let age = 24


// functions
function grinder(items){
    console.log('grinding...', items)
}

// grinder('tomatoes')
// grinder('garlic')

function add(num1, num2){
    console.log('The sum is: ', num1 + num2 )
}
// add(2,3)
// add(20,30)
// add(100, 100)


function joined(){
    let title = document.getElementById('title')
    title.innerText = 'Thanks for joining the masterclass!'
    let btn = document.getElementById('btn')
    btn.style.display = 'none'
}

function usdToInr(){
    let usd = document.getElementById('usd');
    let usdInput = usd.value;
    console.log(usdInput * 82.77)
    let inr = document.getElementById('inr');
    inr.value = (usdInput * 82.77).toFixed(2)
}