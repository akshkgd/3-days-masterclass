// variables, data types, conditionals, functions, arrow functions, DOM Projects;

// variables -> container for storing data temporarily -> let, const, (ES6->var)


// let name = "ashish shukla";
// let age = 25.45;
// let isMarrid = true;
// let hobbies = ["coding", "reading", "cricket"];
// hobbies.pop();

// console.log(hobbies);

// let user = {
//     name: 'ashish',
//     email: 'ashish@codekaro.in',
//     age: 25,
//     isMarrid: true,
//     hobbies: ['coding', 'reading', 'cricket'],
//     address: '123, main street, new york',
// }
// user.mobile = '123456789';
// delete user.email;
// console.log(user);

// array and objects

let weather = 'rainy';


if(weather == 'sunny'){
    console.log('go for a walk its sunny');
} 
else if (weather == 'rainy'){
    console.log('take an umbrella');
}
else{
    console.log('stay home');
}


function grinder(items){
    console.log('grinding...', items);
}
// 


function add(num1, num2){
    console.log(num1 + num2);
}

add(3,5);
add(10,10)


//arrow function
cube = (num) => console.log(num*num*num);


cube(5)