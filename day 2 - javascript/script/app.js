function changeColor(){
    document.getElementById('title').style.color = 'red';
}

let counter = 0;
function add(){
    counter = counter + 1;
    document.getElementById('counter').innerHTML = counter;
}
function minus(){
    counter = counter - 1;
    document.getElementById('counter').innerHTML = counter;
}
function reset(){
    counter = counter = 0;
    document.getElementById('counter').innerHTML = counter;
}