// add all event listeners
//create functions and declare them for start, next, answers, etc
//add all questions
//add timer?
//start game
var answerButtonElement = document.getElementById("answer-button");
let shuffledQuestions, currentQuestionIndex
var questionContainer = document.getElementById("question-container")
var nextButton = document.getElementById("next")
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
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
console.log('started');
shuffledQuestions = testQuestion.sort(() => Math.random() - .5)
startButton.classList.add("hide");
questionContainer.classList.remove("hide");
nextButton.classList.remove("hide");
currentQuestionIndex = 0
setNextQuestion();

}

function setNextQuestion () {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    JSON.stringify(testQuestion);
console.log("next question")
if (selectAnswer) addEventListener("click", nextButton);

//return;

}

function showQuestion(testQuestion) {
    questionElement.innerText = testQuestion.question;
    console.log("show Question")
    testQuestion.answers.forEach((answer) => {
   let button = document.createElement("button");
button.innerText = answer.text;
button.classList.add("btn");
if (answer.correct) {
    button.dataset.correct = answer.correct;
}    
button.addEventListener("click", selectAnswer);
answerButtonElement.appendChild(button);
});
}

function selectAnswer () {
if(shuffledQuestions.length > currentQuestionIndex +1){
nextButton.classList.remove("hide") }
else { startButton.innerText = "Restart"
startButton.classList.remove("hide")}
console.log("next")
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
    nextButton.classList.add("hide")
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}
resetState();
  

