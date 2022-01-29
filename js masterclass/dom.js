function changeColor(){
   document.getElementById('title').style.color = 'red';
}
let counter = 0;
function increment(){
  counter = counter + 1;
  document.getElementById('counter').innerHTML = counter;
}
function decrement(){
    counter = counter - 1;
    document.getElementById('counter').innerHTML = counter;
  }
function reset(){
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
  }