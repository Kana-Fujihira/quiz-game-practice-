let quizDescription = [[
    "The best city in a world is London",
    "True",
    "False",
    true,
], [
    "The 2nd big city name of France is Grenoble ",
    "True",
    "False",
    false,
], [
    "The logo of Lyon is Lion",
    "True",
    "False",
    true,
]
]

// console.log(quizDescription[0][3]);

let question = document.getElementById('question');
// let option1 = document.getElementById('option1');
// let option2 = document.getElementById('option2');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let backTop = document.getElementById('backTop');

let correctAnswer = 0; // initiate number 
let quizCount = 0; // initiate number 

function quizSet() {
    quizCount = 0;
    question.innerText = quizDescription[quizCount][0];
    backTop.style.display = "none"
    answer1.style.display = "block";
    answer2.style.display = "block";
}

quizSet(); // fucntion to go to the next page 

function answerCheck(answer) {
    if (quizDescription[quizCount][3] === answer) {
        alert('You are right!');
        correctAnswer++; // counting correct answer
    }
    else if (quizDescription[quizCount][3] !== answer) {
        alert('You are wrong!');
    }
    quizCount++; // once checking answer, go to the next question 
    if (quizCount === quizDescription.length) {
        question.innerText = `Your Correct is Answer ${correctAnswer}`;
        answer1.style.display = "none"; // True button not displaying at the last page 
        answer2.style.display = "none";// False button not displaying at the last page 
        backTop.style.display = "block"; // Try Again displaying at the last page 
    } else {
        question.innerText = quizDescription[quizCount][0]; //This part ensures that when the user proceeds to the next question (after answering the current one), the text of the question element is updated with the content of the next question from the quizDescription array.
        backTop.style.display = "none"; // Try Again not displaying at the last page 
    }
}

