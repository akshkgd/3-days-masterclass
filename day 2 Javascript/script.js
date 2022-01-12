// variables, data types, functions, arrow functions,  conditionals, events, DOM, projects

// variables -> let and const => var??

// let name = 'John';
// name = 'ashish';
// console.log(name);


// const userId = 1234;
// console.log(userId);


// console.log(userName);
// var userName = 'John';


// data types => strings, numbers, booleans, null, undefined, objects -> arrays

// let firstName = "ashish";
// let age = 30.56;
// let isMarried = true;
// let hobbies = ['sports', 'cooking', 'movies', 'music'];
// console.log(hobbies[3]);
// console.log(typeof isMarried);


// let user = {
//     name: 'ashish',
//     age: 30,
//     isMarried: false,
//     email: 'ashish@codekaro.in',
//     hobbies: ['sports', 'cooking', 'movies', 'music'],
//     address: '123 street, New York, USA',
// }

// user.mobile = '1234567890';
// delete user.email;
// console.log(user)

// let name = prompt('Enter your name');
// let age = prompt('Enter your age')
// if (age < 18) {
//     console.log(name, 'you are not eligible to vote');
// }
// else {
//     console.log(name, 'you are eligible to vote');
// }

function grinder(){
    console.log('grinder is running');
}

function cube(num){
    console.log(num*num*num);
}

cube(5)

function sum(num1, num2){
    console.log(num1+num2);
}

sum(0, -5)


function demo(){
    console.log('demo');
}

demo1 = () => {
    console.log('demo1');
}



function changeColor(){
    document.getElementById('title').style.color = 'red';
}
let counter = 0;
function add(){
    counter = counter+1;
    document.getElementById('counter').innerHTML = counter;
}

function minus(){
    counter = counter-1;
    document.getElementById('counter').innerHTML = counter;
}

function reset(){
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
}


toss = () => {
    let audio = document.getElementById('audio');
    audio.play();
    let randomNumber = Math.floor(Math.random()*2) ;
    if(randomNumber === 0){
        document.getElementById('result').innerHTML = 'Heads 🥳🥳';
    }
    else{
        document.getElementById('result').innerHTML = 'Tails 🤕🤕';
    }
}