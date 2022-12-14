// currency converter app
// cube counter

//es6 => variables, functions, DOM => 100 projects
let email = 'ashish@gmail.com'
email = 'yash@gmail.com'

console.log(email)


//functions 
function grinder(){
    console.log('grinding...')
}

// grinder() // calling of the function
// grinder()
// grinder()

function join(){
    document.getElementById('title').innerHTML = 'Thanks for joining the Masterclass!'
    document.getElementById('btn').style.display = 'none'
}   

function convertToInr(){
    let usd = document.getElementById('usd').value;
    let inr = usd * 82.40;
    document.getElementById('inr').innerText = inr;
}