let seconds = 1000 * 60; //1000 = 1 second in JS
let timer;
let timerE = $('#timer')[0]; // HTML Element
//var timerE1 = $('#timer');  // jQuery object 

/* //These are just for confirmation
console.log("timerE1: " + timerE1);
console.log("timerE1 typeof: " + typeof(timerE1)); // see what data type timerE1 is
console.log("timerE2: " + timerE2);
console.log("timerE2 typeof: " + typeof(timerE2));
*/


/* //this is needed in JS ver.
const playUp = document.getElementById("playUp"); */

//------------for the start-------------
timerE.innerHTML = "" + seconds / 1000;


//when a user clicks the button, the timer will start to count.
//jQuery ver.
$("#playUp").click(function(){
  if (seconds == 60000) {
    timer = setInterval(countDown, 1000);
  }
})

/* //JS ver.
playUp.addEventListener("click", () => {
  if (seconds == 60000) {
    timer = setInterval(countDown, 1000);
  }
});*/

function countDown() {
  seconds -= 1000;
  /* //JS ver.
  document.getElementById("timer").innerHTML = "" + seconds / 1000; */
  timerE.innerHTML = "" + seconds / 1000;

  if (seconds > 0 && seconds <= 10000) {
    $('#timer').removeClass("text-info").addClass('text-warning');
}

  if (seconds === 0) {
    clearInterval(timer);
  }
 
  if (timerE.innerHTML == "0"){
    setTimeout(() => {
      alert("Time up!");
    }, 1);
  }
}