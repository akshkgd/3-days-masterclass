// variables, functions, DOM =>es6
// 3000 + apps 
// bill split application

// variables => var, let and const
let email = 'ashish@gmail.com';
let address = 'allahabad';
address = 'pune';
// console.log(email, address)
// functions 
function grinder(items){
    console.log('grinding...', items)
}
grinder('tomatoes');
grinder('onion and garlic');


function joined(){
    let title = document.getElementById('title');
    title.innerHTML = 'Thanks for joining the bootcamp!';
    let btn = document.getElementById('btn')
    btn.style.display = 'none'
}

function split(){
    let amount = document.getElementById('amount').value;
    let persons = document.getElementById('persons').value;
    let bill = amount / persons;
    document.getElementById('bill').innerText = bill;
}