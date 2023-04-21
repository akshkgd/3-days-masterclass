// var, functions, DOM, Conditionals => es6
// var => var, let and const

// let email = 'ashish@gmail.com';
// functions
function grinder(){
    console.log('grinding...')
}
// grinder();
// grinder();

function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the masterclass! 😎'
    let btn = document.querySelector('.btn')
    btn.style.display = 'none'
}

function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons')

    let bill = amount.value / persons.value;
    document.getElementById('bill').innerText = bill;
}

function bmi(){
    let finalResult = ''
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    height = height /100;
    let result = weight / (height * height);
    if(result <= 18.5){
        finalResult = "Underweight 🍔"
    }
    else if (result >18.5 && result < 24.9){
        finalResult = "Normal ⚡️"
    }
    else if (result >25 && result < 29.9){
        finalResult = "Overweight 🥺"
    }
    else if (result >30 && result < 35){
        finalResult = "Obesity 😔"
    }
    else{
        finalResult = "Severe Obesity 🙏"
    }

    document.getElementById('result').innerText = finalResult;
}
