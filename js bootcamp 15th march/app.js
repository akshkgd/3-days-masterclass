// var, functions, DOM => es6
// bill split application => 

// variables => let and const 
let email = 'ashish@gmail.com'
let age = 24

// functions

function grinder(items){
    console.log('grinding...', items)
}
// grinder('tomatoes');
// grinder('milk, ice, sugar and coffee');

function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the bootcamp live! 🥳'
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}

function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');
    let bill = (amount.value / persons.value).toFixed(2);
    document.getElementById('bill').innerText = bill;
}