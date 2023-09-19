// add all event listeners
//create functions and declare them for start, next, answers, etc
//add all questions
//add timer?

//var input = document.querySelector(".input");
var text = document.querySelector("text")
var submitElement = document.getElementsByClassName("submit");
var formContainer = document.querySelector(".form-container");
var formEl = document.getElementById("form");
var timerEl = document.getElementById("timer")
var interval
var timer = 60;
var answerButtonElement = document.getElementById("answer-button");
let shuffledQuestions, currentQuestionIndex
var questionContainer = document.getElementById("question-container")
var startButton = document.getElementById("start")
var questionElement = document.getElementById("question")
var testQuestion = [
    {
        question: "What is the 'skeleton' of web development?",
        answers: [
            { text: "HTML", correct:true },
             { text: "JavaScript", correct:false },
             { text: "CSS", correct:false },
             { text: "variables", correct:false }
            ]
    },
    {
        question: "Which is a global keyword?",
        answers: [
            { text: "var", correct:true },
             { text: "const", correct:false },
             { text: "let", correct:false },
             { text: "none of the above", correct:false }
            ]
    }, {
        question: "What are the 3 data types in Javascript?",
        answers: [
            { text: "numbers, strings, and booleans", correct:true },
             { text: "numbers, true or false, and letters", correct:false },
             { text: "variables, booleans, and strings", correct:false },
             { text: "letters, numbers, and variables", correct:false }
            ]
    }, {
        question: "How do you add a comment?",
        answers: [
            { text: "//This is a comment", correct:true },
             { text: "(This is a comment)", correct:false },
             { text: "--This is a comment", correct:false },
             { text: ":This is a comment", correct:false }
            ]
    }, {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            { text: "=", correct:true },
             { text: "+", correct:false },
             { text: "*", correct:false },
             { text: ";", correct:false }
            ]
    },]
    

startButton.addEventListener("click", startGame);


function startGame() {
console.log('started');
shuffledQuestions = testQuestion.sort(() => Math.random() - .5)
startButton.classList.add("hide");
questionContainer.classList.remove("hide");
currentQuestionIndex = 0
startTimer();
setNextQuestion();


}

function setNextQuestion () {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
console.log("next question")

};

function showQuestion(testQuestion) {
    questionElement.innerText = testQuestion.question;
    console.log("show Question")
    answerButtonElement.innerHTML = "";
    testQuestion.answers.forEach((answer) => {
   let button = document.createElement("button");
button.innerText = answer.text;
button.classList.add("btn");

    button.dataset.correct = answer.correct;
  
button.addEventListener("click", selectAnswer);
answerButtonElement.appendChild(button);
});
}

function selectAnswer (event) {
    console.log(event);
    if (event.target.dataset.correct === "false") {
        timer = timer - 10
    }
if(shuffledQuestions.length > currentQuestionIndex +1){
}
else { 
    endGame();
    return;
}

console.log("next")
currentQuestionIndex++
setNextQuestion()
}

//function setStatusClass(element,correct) {
    //clearStatusClass(element)
    //if (correct) {
       // element.classList.add("correct")
//} else {
   // element.classList.add("wrong")
//}
//}

//function clearStatusClass() {
    //element.classList.remove("correct")
    //element.classList.remove("wrong")
//}
function resetState() {
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}
resetState();
  
function startTimer () {
interval = setInterval(function() {
timerEl.textContent = timer
timer --
timerEl.testContent = timer 
if(timer <= 0) {
    endGame();
}
},1000)
}

function endGame () {
    clearInterval(interval)
    startButton.innerText = "Restart"
startButton.classList.remove("hide")
questionContainer.classList.add("hide");
formContainer.classList.remove("hide");

console.log(timer);


//console.log(input);
};

//const storageInput = document.querySelector("text"),
    //textContent = InputEvent.target.value



//storageInput.addEventListener("submit") => {
const saveLocal = () => {
    localStorage.setItem("textInput", text.textContent)
}
function submit() {
submit.addEventListener("click", saveLocal);
console.log("submit");
}