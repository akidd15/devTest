var startButton = document.getElementById("#start")
//startButton.addEventListener("click",startGame);
var questions = [
    {  questions: "What is the skeleton of any website?",
        answers: 
    { text:"html", correct:true,
    text:"javascript", correct:false}
}
]

function startGame() {
startButton.classList.add("hide")
questionsContinerElement.classList.remove("hide")
console.log("started")
}

function nextQuestion() {

}

function selectAnswer() {

}