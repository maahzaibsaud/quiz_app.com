const question = [
    {             // 1
        question: "which is the largest animal in the world?",
        answers: [
            {text: "Shark"  , correct: false},
            {text: "Blue Whale"  , correct: true},
            {text: "Elephant"  , correct: false},
            {text: "Giraffe"  , correct: false},


        ] 
    },
     {       // 2
        question: "How many letters are there in the English Alphabet?",
        answers: [
            {text: "20"  , correct: false},
            {text: "14"  , correct: false},
            {text: "26"  , correct: true},
            {text: "21"  , correct: false},


        ] 
    },
     {          //3
        question: "Which is the national flower of Pakistan?",
        answers: [
            {text: "Jasmine"  , correct: true},
            {text: "Rose"  , correct: false},
            {text: "Sun Flower"  , correct: false},
            {text: "None of these"  , correct: false},


        ] 
    },
     {           //4
        question: "The second largest city of pakistan is?",
        answers: [
            {text: "Faislabad"  , correct: false},
            {text: "Hyderabad"  , correct: false},
            {text: "Chagai"  , correct: false},
            {text: "Lahore"  , correct: true},


        ] 
    },
     {            // 5
        question: "The highest part of the Earth is ?",
        answers: [
            {text: "Mount Everest"  , correct: true},
            {text: "k2"  , correct: false},
            {text: "Norway"  , correct: false},
            {text: "North pole"  , correct: false},


        ] 
    },
     {             // 6
        question: "What type of animal is a penguin?",
        answers: [
            {text: "Insect"  , correct: false},
            {text: "Mammal"  , correct: false},
            {text: "Reptile"  , correct: false},
            {text: "Bird"  , correct: true},


        ] 
    }, 
    {             //7
        question: "What are the primmary colors?",
        answers: [
            {text: "Yellow Orange Green"  , correct: false},
            {text: "Blue Pink White"  , correct: false},
            {text: "Yellow Blue Red"  , correct: true},
            {text: "None of these"  , correct: false},


        ] 
    },
     {             // 8
        question: "National code of pakistan is?",
        answers: [
            {text: "PAK"  , correct: true},
            {text: "P.K"  , correct: false},
            {text: "KPk"  , correct: false},
            {text: "Pakistan"  , correct: false},


        ] 
    },
     {              // 9
        question: "What is the national fruit of pakistan?",
        answers: [
            {text: "Banana"  , correct: false},
            {text: "Mango"  , correct: true},
            {text: "Grapes"  , correct: false},
            {text: "Pine apple"  , correct: false},


        ] 
    },
     {                //10
        question: "What is the national language of pakistan?",
        answers: [
            {text: "Urdu"  , correct: true},
            {text: "Punjabi"  , correct: false},
            {text: "Sindhe"  , correct: false},
            {text: "Gujrati"  , correct: false},


        ] 
    }
];

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
nextButton.innerHTML = "Next";
showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button")
            button.innerHTML = answer.text;
            button.classList.add("btn")
            answerButtons.appendChild(button)
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click" , selectAnswer)

        
    });
    
}

function resetState(){
    nextButton.style.dispaly = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect")
    }
     
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${question.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}





nextButton.addEventListener("click" , () =>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})





startQuiz();
