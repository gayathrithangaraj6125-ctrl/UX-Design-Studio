// ===============================
// UI/UX Quiz
// ===============================

const questions = [

{
question:"1. What is Divergent Thinking?",
answers:[
{text:"Generating many ideas",correct:true},
{text:"Selecting one idea",correct:false},
{text:"Testing software",correct:false},
{text:"Coding",correct:false}
]
},

{
question:"2. Which research method observes users directly?",
answers:[
{text:"Survey",correct:false},
{text:"Interview",correct:false},
{text:"Direct Observation",correct:true},
{text:"Email",correct:false}
]
},

{
question:"3. What is a Persona?",
answers:[
{text:"Programming Language",correct:false},
{text:"Database",correct:false},
{text:"Fictional User Profile",correct:true},
{text:"Algorithm",correct:false}
]
},

{
question:"4. Information Architecture helps users to...",
answers:[
{text:"Find information easily",correct:true},
{text:"Increase coding speed",correct:false},
{text:"Develop software",correct:false},
{text:"Create databases",correct:false}
]
},

{
question:"5. Good UX balances...",
answers:[
{text:"Users and Organizations",correct:true},
{text:"Programmers and Computers",correct:false},
{text:"Teachers and Students",correct:false},
{text:"HTML and CSS",correct:false}
]
}

];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
const restartButton=document.getElementById("restart-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){

currentQuestionIndex=0;
score=0;
nextButton.style.display="none";
restartButton.style.display="none";

showQuestion();

}

function showQuestion(){

resetState();

let currentQuestion=questions[currentQuestionIndex];

questionElement.innerHTML=currentQuestion.question;

currentQuestion.answers.forEach(answer=>{

const button=document.createElement("button");

button.innerHTML=answer.text;

button.classList.add("btn");

answerButtons.appendChild(button);

if(answer.correct){

button.dataset.correct=answer.correct;

}

button.addEventListener("click",selectAnswer);

});

}

function resetState(){

nextButton.style.display="none";

answerButtons.innerHTML="";

}

function selectAnswer(e){

const selectedBtn=e.target;

const correct=selectedBtn.dataset.correct==="true";

if(correct){

selectedBtn.classList.add("correct");

score++;

}

else{

selectedBtn.classList.add("wrong");

}

Array.from(answerButtons.children).forEach(button=>{

if(button.dataset.correct==="true"){

button.classList.add("correct");

}

button.disabled=true;

});

nextButton.style.display="block";

}

function showScore(){

resetState();

questionElement.innerHTML=

`🎉 You scored ${score} out of ${questions.length}!`;

nextButton.style.display="none";

restartButton.style.display="block";

}

function handleNextButton(){

currentQuestionIndex++;

if(currentQuestionIndex<questions.length){

showQuestion();

}

else{

showScore();

}

}

nextButton.addEventListener("click",handleNextButton);

restartButton.addEventListener("click",startQuiz);

startQuiz();
