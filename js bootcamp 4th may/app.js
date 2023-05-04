// bill split application
// var, functions and DOM
// 3000 + projects

// varibles => var, let and const 
let email = 'ashish@gmail.com'
let address = 'allahabad'


// functions  ??

function grinder(){
    console.log('grinding...')
}


grinder();
grinder()

function joined(){
    let title = document.getElementById('title');
    title.innerText = "Thanks for joining the masterclass live 😎"
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}
    
function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');

    let bill = amount.value / persons.value;
    document.getElementById('bill').innerText = Math.floor(bill);
}