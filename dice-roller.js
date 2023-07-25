const audio = new Audio();
const sfx = ["audio/dice0.mp3", "audio/dice1.mp3", "audio/dice2.mp3", "audio/dice3.mp3", "audio/dice4.mp3", "audio/dice5.mp3"];
var llor = 0;

function mtplr(){
    var multiplier = document.getElementById('multiplier');
    multiplier.innerHTML ++;
}

function reset(){
    multiplier.innerHTML = 1;
}

function print(x){
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = x;
}

const d4 = {roll: function(){let result = Math.floor(Math.random() * 4) + 1; return result;}}
const d6 = {roll: function(){let result = Math.floor(Math.random() * 6) + 1; return result;}}
const d8 = {roll: function(){let result = Math.floor(Math.random() * 8) + 1; return result;}}
const d10 = {roll: function(){let result = Math.floor(Math.random() * 10) + 1; return result;}}
const d12 = {roll: function(){let result = Math.floor(Math.random() * 12) + 1; return result;}}
const d20 = {roll: function(){let result = Math.floor(Math.random() * 20) + 1; return result;}}
const d100 = {roll: function(){let result = Math.floor(Math.random() * 100) + 1; return result;}}

function go(sides){
    llor = 0;
    console.clear();

    let diceN = Math.floor(Math.random() * sfx.length);
    audio.src = sfx[diceN];
    audio.currentTime = 0;
    audio.play();

    // console.log(typeof Number(multiplier));
    // console.log(typeof multiplier.innerHTML);

    for (let i = 0; i < multiplier.innerHTML; i++){
        var result = sides.roll();
        console.log(result);
        llor = llor + result;
    }

    print(llor);
}