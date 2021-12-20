console.log('external file connected!');

//ES6 -> variables, data types, conditionals, functions, arrow functions, DOM, Projects


// variables
// let and const -> (var)


let name = 'John';
let age = 14;
let isMarried = true;
let email;
console.log(typeof phone);
// array-> (object) and objects
let hobbies = ['movies', 'music', 'sports', 'cooking'];
console.log(hobbies[0]);


// objects
// let person = {
//     name: 'John',
//     age: 24,
//     isMarried: true,
//     hobbies: ['movies', 'music', 'sports', 'cooking'],
//     address: {
//         address: '123 Main St',
//         city: 'Boston',
//         state: 'MA',
//         zipCode: '02111'
//     }
// }
// console.log(person.address.address);
// let name = prompt('Enter your name');
// alert('hello ' + name);


// conditionals

if(age >= 18){
    console.log(name + ' you are old enough to vote');
}
else{
    console.log( name +  ' you are not old enough to vote');
}

// functions

// function demo(name){
//     console.log('hello ' + name); //function declaration
// }

// demo('ashish')


function tds(salary){
    return salary * 0.1;

}

let salary = 35000;
let calulatedTDS = tds(salary);
console.log("Updated Salary is: ", + calulatedTDS + salary);


