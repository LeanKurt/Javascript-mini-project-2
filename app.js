// variables for buttons
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');



// varaibles for time value
let seconds = 0;
let minutes = 0;
let hours = 0;



//variables for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;




//variables for set interval and timer status
let timerInterval = null;
let timerStatus = "stopped";

//stop watch function

function watch () {
    seconds++
    if(seconds/60 === 1){
        minutes++
    }

    if(minutes/60 === 1) {
        hours++
    }

    if(seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    
    if(minutes< 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }
    
    if(hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

startStopBtn.addEventListener('click', function() {
      if(timerStatus === "stopped"){
        timerInterval = window.setInterval(watch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class = "fa-solid fa-pause" id="play"</i>`;
        timerStatus = "started";
      } else {
        timerInterval = window.clearInterval(timerInterval)
        document.getElementById('startStopBtn').innerHTML = `<i class = "fa-solid fa-play"id="play"</i>`;
        timerStatus = "stopped";
      }
});


resetBtn.addEventListener('click', function(){
    timerInterval = window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerText = "00:00:00";
});
