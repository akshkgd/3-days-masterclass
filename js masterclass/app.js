// ES6 -> latest version of javascript
// variables, dt, conditionals, functions, arrow functions, DOM, projects

//variables -> let and const (var??)
//data types -> string, number, boolean, array, object, null, undefined


let name = 'yash';
let age = 25.6;
let isAlive = false;
console.log(isAlive)
console.log(typeof isAlive);

let hobbies = ['cooking', 'sports', 'coding'];
// hobbies.push('movies');
hobbies.pop();
console.log(hobbies);


let user = {
    name: 'ashish',
    age: 25,
    email: 'ashish@gmail.com'
}
user.address = 'pune';
delete user.age;
console.log(user);



// functions

// function grinder(item){
//     console.log('grinding...', item);
// }
// grinder('tomatoes');
// grinder('banana, milk, sugar');

// function greet(name){
//     console.log('Welcome to the js Masterclass', name);
// }

// greet(name);

// function add(num1, num2){
//     console.log(num1 + num2);
// }
// add(2,3)


// arrow functions

function functionName() {
    
}

functionName = () => {
    //arrow function body
}

cube = (num) => console.log(num * num * num);


cube(5)