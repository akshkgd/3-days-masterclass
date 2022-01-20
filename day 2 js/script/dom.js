
function changeColor(){
    document.getElementById('title').style.color = 'red'
}


let counter = 0;
add = () => {
    counter = counter + 1;
    // counter++;
    //counter += 1;
    document.getElementById('counter').innerHTML = counter;
}
minus = () => {
    counter = counter - 1;
    // counter--;
    //counter -= 1;
    document.getElementById('counter').innerHTML = counter;
}
reset = () => {
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
}



toss = () => {
    let audio = document.getElementById('audio');
    audio.play();
    let tossCoinNumber = Math.random();
    console.log(tossCoinNumber);
    if (tossCoinNumber < 0.5) {
        document.getElementById('result').innerHTML = 'Heads 🤪🥳';
    }
    else{
        document.getElementById('result').innerHTML = 'Tails 🤦🏻';
    }
}