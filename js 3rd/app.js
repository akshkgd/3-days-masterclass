// cube counter
// currency converter
// bill splitting app

// variables, functions, DOM

// console.log('app.js is connected!!');
//variables => let, const and var =>temp data
// let email = 'ashish@gmail.com';
// email = 'yash@gmail.com'
// console.log(email);


function grinder(){
    console.log('grinding...')
}
// grinder()
// grinder()

function joined(){
   title.innerHTML = 'Thank you for joining 🎉';
   btn.style.display = 'none'
}

function cube(){
    let num = number.value;
    let numCube = num * num * num;
    result.innerHTML = numCube;
    number.value = ''
}

function convert(){
    let value = usd.value;
    let convertedCurrency = (value * 79.71).toFixed(2);
    inr.innerHTML = convertedCurrency;
}