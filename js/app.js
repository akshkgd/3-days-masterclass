// es6 => cube counter, bill split application
// variables, functions, DOM 

// console.log('app.js is connected!!')

//variables -> temp. storage  => var, let and const
let email = 'ashish@gmail.com';
email = 'yash@gmail.com'
// console.log(email);

let age = 24;
age = 28;
// console.log(age)

// function grinder(items){
//     console.log('grinding...', items)
// }

// grinder('tomatoes');
// grinder('onion');



// function add(num1, num2){
//     console.log('The sum is: ', num1 + num2 )
// }

// add(13,5)

// process salary -> deduct the tds from the salary
//tds is 10%

function tds(name, salary){
    let tds = salary * 0.1;
    let inHand = salary - tds;
    console.log('The salary for', name , 'of rs.', inHand ,  'is processed.')
}

// tds('ashish', 40000);
// tds('nayan', 86000)

function joined(){
    document.getElementById('img').style.display = 'block';
    document.getElementById('title').innerHTML = 'Congratulations on Joining the masterclass!!'
}

function cube(){
   let num =  document.getElementById('number').value;
    let result = num * num * num;
    document.getElementById('result').innerHTML = result;
}