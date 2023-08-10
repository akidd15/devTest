// add all event listeners
//create functions and declare them for start, next, answers, etc
//add all questions
//add timer?
//start game
var currentQuestionIndex
var questionContainer = document.getElementById("question-container")
var nextButton = document.getElementById("next")
var startButton = document.getElementById("start")
var question = document.getElementById("question")
var testQuestion = [
    {
        question: "what is the 'skeleton' of web development?",
        answers: [
            { text: "HTML", correct:true },
             { text: "JavaScript", correct:false },
             { text: "CSS", correct:false },
             { text: "variables", correct:false }
        ]
    }
]
startButton.addEventListener('click', startGame);

function startGame() {
console.log('started')
startButton.classList.add("hide")
questionContainer.classList.remove("hide")
currentQuestionIndex = 0
setNextQuestion();

}

function setNextQuestion () {
    showQuestion(currentQuestionIndex)
    JSON.stringify(testQuestion);
console.log("next question")
return;
}

function showQuestion() {
    //testQuestion.innerText = question.question
    console.log("show Question")
    
}

function selectNextAnswer () {

}


