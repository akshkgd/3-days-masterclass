// currency converter
// bill splitting application
// variables, functions, DOM (Document object model)
// console.log('app.js is connected!')

//variables => temp data => let, const, var


let email = 'ashish@gmail.com';
email = 'yash@codekaro.in'
// console.log(email)

function grinder(){
    console.log('grinding...')
}
// grinder()
function join(){
    document.getElementById('title').innerHTML = 'Thanks for joining!!'
}

function usdToInr(){
    let usd = document.getElementById('usd').value;
    // let inr = usd * 79.81;
    let inr = usd * 100
    document.getElementById('inr').innerHTML = inr;
}

function splitBill(){
    let amount = document.getElementById('amount').value;
    let persons = document.getElementById('persons').value;
    let bill = amount / persons;
    document.getElementById('bill').innerHTML = bill;
}