// bill splitting application
// cube counter app
//variables, functions, DOM
//ES6

//variables -> temp storage => var, let and const
let supportEmail = 'ashish@gmail.com';
supportEmail = 'yash@codekaro.in';
// console.log(supportEmail)

//functions

// function grinder(items){
//     console.log('grinding...', items)
// }

// grinder('tomatoes');
// grinder();

// function add(num1, num2){
//     console.log(num1+ num2)
// }

// add(2,31);
// add(23,23)
//tds is 10%
function processSalary(name, salary){
    let tds = salary * .1;
    console.log('The salary is processed for', name, ' of rupees ', salary-tds)
}
// processSalary('ashish', 50000)
// processSalary('himanshu', 80000)


function clicked(){
    document.getElementById('title').innerHTML = 'The button has been clicked!'
}

function cube(){
    let num = document.getElementById('number').value;
    let result = num * num * num;
    document.getElementById('result').innerHTML = result;
}