let seconds = 1000 * 60; //1000 = 1 second in JS
let timer;

function countDown() {
   if(seconds == 60000)
     timer = setInterval(countDown, 1000)
   seconds -= 1000;
   document.getElementById("timer").innerHTML = "" + seconds/1000;
   if (seconds <= 0) {
       clearInterval(timer);
       alert("Time up!");
   }
} //If seconds are equal or greater than 0, countdown until 1 minute has passed
//Else, clear the timer and alert user of how many words they type per minute

document.getElementById("timer").innerHTML= "" + seconds/1000;

countDown();