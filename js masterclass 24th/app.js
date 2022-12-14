// currency converter
// bill split application
// JS VARIABLES, JS FUNCTIONS, DOM(DOCUMENT OBJECT MODEL)

// console.log('app.js is connected!')

// variables => (var), let and const 
let email = 'ashish@gmail.com';
email = 'yash@gmail.com'
let age = 24;
// console.log(age)
// console.log(email)

// functions
function grinder(items){
    console.log('grinding...', items)
}

// grinder('tomatoes');
// grinder();

function joined(){
    let title =   document.getElementById('title');
    title.innerText = 'Thanks for joining!!';
    document.getElementById('btn').style.display = 'none';
}

function usdToInr(){
    
    let usd = document.getElementById('usd').value;
    let inr = (usd * 81.70).toFixed(2);
    let result = "Rs "+ inr;
    document.getElementById('inr').innerText = result;
    // console.log(usd * 81.70)
}
function closeAlert(){
    document.getElementById('alert').style.display = 'none';
    document.getElementById('close').style.display = 'none';
    document.getElementById('show').style.display = 'block';

}
function showAlert(){
    document.getElementById('alert').style.display = 'block';
    document.getElementById('show').style.display = 'none';
    document.getElementById('close').style.display = 'block';


}