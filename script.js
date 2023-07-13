var timerEl = document.getElementById(".timer");
var mainEL = document.getElementById("#container");
var secondsLeft = 60;
var buttonEl = document.getElementById("#button")
var textAreaEl = document.getElementById("#text-area")

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

buttonEl.addEventListener('click', function (event) {
    event.preventDefault();
    textAreaEl.value = "";
}
