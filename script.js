var timerEl = document.getElementById(".timer");
var mainEL = document.getElementById("#container");
var secondsLeft = 60;

function setTime () {
    var timerInterval = setInterval(function) {
        secondsLeft--;
        timerEl.textContent = secondsLeft; + "Oops! You didn't answer all the questions! Check out your score."

        if (secondsLeft === 0 && // questions not answered) {
            clearInterval(timerInterval);
            sendMessage();  
        }
    }, 1);
}

function sendMessage() {
    timerEl.textContent = "";
}

setTime();