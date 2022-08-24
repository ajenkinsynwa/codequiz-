const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestions = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

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
        choice4: "Hyper Text Markup Link",
        answer: 4 
    },
    {
        
        question: "How can you create a email link in HTML?",
        choices: "Mail>alexjenkins@gmail.com",
        choice2: "Mail<alexjenkins@gmail.com",
        choices: "A href=alexjenkns@gmail.com",
        choice4: "A href=quotes mailto:alexjenkins@gmail.com",
        answer: 4
    }
];


const Correct_Bouns = 10;
const Max_Questions = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > Max_Questions) {
        return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestions = availableQuestions[questionIndex];
        question.innerText = currentQuestions.question;

        choices.forEach( choice => {
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
       const selectedAnswer = selectedChoice.dataset["number"];
       // console.log("currentquestions",currentQuestions);

      // const classToApply = "incorrect";
      // if (selectedAnswer === currentQuestions.answer) {
           // classToApply = "correct";
      // }

       //selectedChoice.parentElement.classlist.add(classToApply);
       //selectedChoice.parentElement.classlist.remove(classToApply);

       
       getNewQuestion();
       
});
});

startGame();