// VAR => var, let and const
let email = 'ashish@gmail.com';
email = 'help@codekaro.in';
// console.log(email)

// functions

function grinder(items){
    console.log('grinding...', items)
}
// grinder('tomatoes');
// grinder('onions')

function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the bootcamp live 🍔'
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}
function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons')
    let bill = Math.floor(amount.value / persons.value)
    document.getElementById('bill').innerText = bill;

}