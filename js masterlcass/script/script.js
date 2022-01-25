function changeColor(){
    document.getElementById('title').style.color = 'red';
}
let counter = 0;
function increment(){
   counter = counter + 1;
   //counter++;
   //counter += 1;
   document.getElementById('counter').innerHTML = counter;
}
function decrement(){
    counter = counter - 1;
    //counter--;
    //counter -= 1;
    document.getElementById('counter').innerHTML = counter;
 }
 function reset(){
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
 }
 function toss(){
     let number = Math.floor(Math.random()*2);
     if(number == 1){
         document.getElementById('coin').innerHTML = 'Heads 🥳😎';
     }
        else{
            document.getElementById('coin').innerHTML = 'Tails 🥺😫';
        }
 }