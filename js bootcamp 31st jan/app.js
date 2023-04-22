// bill split app, converter App
// variables, Functions, DOM

// variables => var, let and const

let coffee = 'brew';
// console.log(coffee);


let email = 'ashish@codekaro.in';
// console.log(email)

// functions

function grinder(){
    console.log('grinding...')
}

// grinder()
// grinder()

function joined(){
   let title = document.getElementById('title')
   title.innerText = 'Thanks for joining the Bootcamp!';
   let btn = document.getElementById('btn');
   btn.style.display = 'none'
}


function convert(){
    let feet = document.getElementById('feet').value;
    let cm = feet * 30.48;
    let result = feet + " feet is " + cm + " CM"
    document.getElementById('result').innerText = result;

}

function split(){
    let amount = document.getElementById('amount').value;
    let persons = document.getElementById('person').value;

    let bill = amount / persons;
    document.getElementById('result').innerText = bill;

}