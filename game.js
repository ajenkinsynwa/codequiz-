const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');

let currentQuestions = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

var sec = 15;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! Click to Restart");
        window.location.href = "https://ajenkinsynwa.github.io/codequiz-/";

    }
}

let questions = [
    {
        question: "What is HTML??",
        choice1: "HTML describes the structure of a webpage",
        choice2: "HTML is the standard markup language mainly used to create web pages",
        choice3: "HTML consists of a set of elements that helps the browser how to view the content",
        choice4: "All of the above",
        answer: 4
    },
    {
        question: "What does HTML stand for?",
        choice1: "Home Tool Markup Link",
        choice2: "Home and Text Markup Link",
        choice3: "Home and Texture Markup Link",
        choice4: "Hyper Text Markup Language",
        answer: 4
    },
    {
        question: "What is the correct HTML tag for largest heading?",
        choice1: "H6",
        choice2: "Head",
        choice3: "Heading",
        choice4: "H1",
        answer: 4 
    }
];


const Correct_Bouns = 10;
const Max_Questions = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    // if(availableQuestions.length === 0 || questionCounter > Max_Questions) {
    //     return window.location.assign("/end.html");
    // }
    

    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + Max_Questions;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestions = availableQuestions[questionIndex];
    question.innerText = currentQuestions.question;
    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestions['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = parseInt(selectedChoice.dataset["number"]);
        let classToApply = "incorrect";
        const scoreElement = document.querySelector('#score');
        if (selectedAnswer === currentQuestions.answer) {
            classToApply = "correct";
            score += 1;
            console.log('is correct', score)
            scoreElement.innerHTML = score
        } else {
            score -= 1;
            console.log('is NOT correct', score)
            scoreElement.innerHTML = score--;
        }
        getNewQuestion();

    });
});

startGame();
