// var, functions, DOM
// variables => var, let and const

// let coffee = 'brew and nescafe';
// let supoprtEmail = 'info@codekaro.in'
// supoprtEmail = 'help@codekaro.in'
//  console.log(supoprtEmail);

// functions
function functionName(){
    // logic
}

function grinder(items){
    console.log('grinding...', items)
}

// grinder('tomatoes');
// grinder('potatoes');



function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the bootcamp!'
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}

function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');

    // let bill = (amount.value / persons.value).toFixed(2);
    let bill = Math.floor(amount.value / persons.value);

    document.getElementById('bill').innerText = bill;
    document.getElementById('title').innerText = 'Is your splitted amount🥳'
}


(num * num * num)