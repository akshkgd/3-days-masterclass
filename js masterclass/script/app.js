// variables, data types, functions, arrow functions, DOM, Projects => ES6


// variables -> let and const, (var?? -> es5 ->deprecated)
//data types -> number, string, boolean, undefined, null, object, array


let name = "John Doe";
// console.log(typeof name);

let age = 24.67;
// console.log(typeof age);


let isAlive = false;
// console.log(typeof isAlive);


let hobbies = ['coding', 'music', 'movies', 'swimming'];
// hobbies.push('teaching');
// hobbies[1] = 'singing';
// hobbies.pop();
hobbies.splice(2, 1);
// console.log(hobbies);


let user = {
    name: 'ashish',
    email: 'ashish@codekaro.in',
    age: 24,
    address: 'kolkata'
}

user.mobile = '9876543210';
// delete user.age;
// console.log(user)



// functions

// function grinder(item){
//     console.log('grinding...', item);
// }

// grinder('tomatoes');
// grinder('potatoes');



function sqr(num){
    console.log(num*num)
}
let number = 4
sqr(number);

function calculateTds(salary){
 let tds = salary * 0.1;
 return tds;
}

let calculatedTds = calculateTds(12000);
console.log(calculatedTds);
let inHand = 15000 - calculatedTds;
console.log(inHand);


// arrow function -> es6

cube = (num) => num*num*num;

functionName = () => {
    console.log('arrow function syntax');
}

console.log(cube(2))