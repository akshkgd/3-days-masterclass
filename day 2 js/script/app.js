//ES6 > (ES5) =>  variables, data types, conditionals, functions, arrow function, DOM, Projects


// variables -> temporary storage for data -> let and const > var??
// console.log(name);



// data types => strings, numbers, booleans, null, undefined, objects

// let name = "ashish"
// console.log(typeof name)

// let age = 20.45;
// console.log(typeof age);

// let isAlive = false;
// console.log(isAlive);
// console.log(typeof isAlive);


// let email;
// console.log(typeof email);


// // array and objects -> object

// let hobbies = ["cooking", "sports", "coding"];
// hobbies.pop();
// console.log(hobbies);


// let user = {
//     name: "ashish",
//     email: "ashish@codekaro.in",
//     age: 20,
//     address: "123 main st, chicago, IL, 88982",
// }

// user.id = "12345";
// delete user.address;

// console.log(user);


// let weather = 'sunny';
// if (weather == 'rainy') 
//     console.log('its raining');
// else if (weather == 'sunny')
//     console.log('its sunny');
// else 
//     console.log('its normal');


let age = 18;

if(age == '18') {
    console.log("your age is 18");
}
else{
    console.log("your age is not 18");
}


function add(num1, num2){
    console.log(num1 + num2);
}

add(1, 20);

// arrow functions

function fNme(){
    // normal function
}

cube = (num) => {
    console.log( num * num * num);
}

cube(5);
