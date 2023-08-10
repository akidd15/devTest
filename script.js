// add all event listeners
//create functions and declare them for start, next, answers, etc
//add all questions
//add timer?
//start game

const startButton = document.getElementById("start")
let question = document.getElementById("question")
let testQuestion = [
    {
        question: "what is the skelton of web development?",
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
question.classList.remove("hide")
setNextQuestion()

}

function setNextQuestion () {
showQuestion(testQuestion)
}

function showQuestion(question) {
    question.innerText = testQuestion.question
    console.log(question)
}

function selectNextAnswer () {

}