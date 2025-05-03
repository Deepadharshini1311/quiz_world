const questions = [
    { section: "Aptitude", question: "What is 20% of 150?", answers: [
        { text: "30", correct: true }, 
        { text: "20", correct: false }, 
        { text: "25", correct: false },
         { text: "35", correct: false }
    ]},
    { section: "Aptitude", question: "A train moving at 60 km/h crosses a pole in 9 seconds. What is its length?", answers: [
        { text: "150 meters", correct: true }, 
        { text: "100 meters", correct: false }, 
        { text: "200 meters", correct: false }, 
        { text: "250 meters", correct: false }
    ]},
    { section: "Aptitude", question: "Find the missing number: 2, 6, 12, 20, __", answers: [
        { text: "30", correct: true }, 
        { text: "28", correct: false }, 
        { text: "32", correct: false }, 
        { text: "36", correct: false }
    ]},
    { section: "Aptitude", question: "The ratio of 3:5 is equal to which percentage?", answers: [
        { text: "60%", correct: true },
         { text: "50%", correct: false }, 
        { text: "40%", correct: false }, 
        { text: "70%", correct: false }
    ]},
    { section: "Aptitude", question: "If the cost price is Rs. 200 and selling price is Rs. 250, find the profit percentage.", answers: [
        { text: "25%", correct: true }, 
        { text: "20%", correct: false }, 
        { text: "30%", correct: false },
         { text: "15%", correct: false }
    ]},
    { section: "Aptitude", question: "What is the square root of 324?", answers: [
        { text: "18", correct: true },
         { text: "16", correct: false }, 
        { text: "20", correct: false }, 
        { text: "22", correct: false }
    ]},
    { section: "Aptitude", question: "Solve: 48 ÷ 6 × 4 - 5 = ?", answers: [
        { text: "27", correct: true }, 
        { text: "25", correct: false }, 
        { text: "30", correct: false }, 
        { text: "32", correct: false }
    ]},
    { section: "Aptitude", question: "If 12 men can complete a work in 15 days, how many days will 20 men take?", answers: [
        { text: "9 days", correct: true }, 
        { text: "10 days", correct: false }, 
        { text: "8 days", correct: false },
         { text: "12 days", correct: false }
    ]},
    { section: "Aptitude", question: "What is the next number in the series: 1, 4, 9, 16, __?", answers: [
        { text: "25", correct: true }, 
        { text: "20", correct: false }, 
        { text: "30", correct: false }, 
        { text: "36", correct: false }
    ]},
    { section: "Aptitude", question: "A person walks 10 km south, then 5 km east. How far is he from the starting point?", answers: [
        { text: "11.18 km", correct: true },
        { text: "10 km", correct: false }, 
        { text: "12 km", correct: false }, 
        { text: "15 km", correct: false }
    ]},
    { section: "Aptitude", question: "A sum of Rs. 5000 is invested at 5% per annum simple interest. What is the total amount after 3 years?", answers: [
        { text: "Rs. 5750", correct: true }, 
        { text: "Rs. 5500", correct: false }, 
        { text: "Rs. 6000", correct: false }, 
        { text: "Rs. 6500", correct: false }
    ]},
    { section: "Aptitude", question: "Solve: 75% of 240 = ?", answers: [
        { text: "180", correct: true }, 
        { text: "200", correct: false }, 
        { text: "160", correct: false }, 
        { text: "220", correct: false }
    ]},
    { section: "Aptitude", question: "Find the HCF of 36 and 48.", answers: [
        { text: "12", correct: true },
         { text: "18", correct: false }, 
        { text: "24", correct: false }, 
        { text: "6", correct: false }
    ]},
    { section: "Aptitude", question: "A shopkeeper marks an item at Rs. 800 and gives a 10% discount. What is the selling price?", answers: [
        { text: "Rs. 720", correct: true }, 
        { text: "Rs. 700", correct: false }, 
        { text: "Rs. 750", correct: false },
         { text: "Rs. 780", correct: false }
    ]},
    { section: "Aptitude", question: "A bag contains 4 red, 5 blue, and 6 green balls. What is the probability of picking a blue ball?", answers: [
        { text: "5/15", correct: true }, 
        { text: "6/15", correct: false }, 
        { text: "4/15", correct: false },
         { text: "3/15", correct: false }
    ]},
    { section: "Aptitude", question: "A clock gains 2 minutes every hour. How much will it gain in a day?", answers: [
        { text: "48 minutes", correct: true }, 
        { text: "24 minutes", correct: false }, 
        { text: "50 minutes", correct: false },
         { text: "60 minutes", correct: false }
    ]},
    { section: "Aptitude", question: "Find the next number in the pattern: 3, 6, 12, 24, __?", answers: [
        { text: "48", correct: true },
         { text: "36", correct: false }, 
        { text: "50", correct: false },
         { text: "60", correct: false }
    ]},
    { section: "Aptitude", question: "A shopkeeper sells an item at 20% loss for Rs. 240. What is the cost price?", answers: [
        { text: "Rs. 300", correct: true },
         { text: "Rs. 250", correct: false }, 
        { text: "Rs. 280", correct: false }, 
        { text: "Rs. 320", correct: false }
    ]},
    { section: "Aptitude", question: "The LCM of 15 and 20 is?", answers: [
        { text: "60", correct: true }, 
        { text: "30", correct: false }, 
        { text: "45", correct: false },
         { text: "75", correct: false }
    ]},
    { section: "Aptitude", question: "The population of a town increases by 10% every year. If the current population is 5000, what will it be after 1 year?", answers: [
        { text: "5500", correct: true },
         { text: "5200", correct: false }, 
        { text: "5400", correct: false },
         { text: "5600", correct: false }
    ]},
    
    { section: "Verbal", question: "Synonym of 'Happy'?", answers: [
        { text: "Joyful", correct: true },
        { text: "Sad", correct: false },
        { text: "Angry", correct: false },
        { text: "Tired", correct: false }
    ]},
    { section: "Verbal", question: "Opposite of 'Strong'?", answers: [
        { text: "Weak", correct: true },
        { text: "Tough", correct: false },
        { text: "Brave", correct: false },
        { text: "Powerful", correct: false }
    ]},
    { section: "Verbal", question: "What is a synonym for 'Brave'?", answers: [
        { text: "Courageous", correct: true },
        { text: "Weak", correct: false },
        { text: "Cowardly", correct: false },
        { text: "Shy", correct: false }
    ]},
    { section: "Verbal", question: "Find the correct spelling:", answers: [
        { text: "Accommodate", correct: true },
        { text: "Acomodate", correct: false },
        { text: "Acommadate", correct: false },
        { text: "Acomadate", correct: false }
    ]},
    { section: "Verbal", question: "Choose the correctly spelled word:", answers: [
        { text: "Embarrass", correct: true },
        { text: "Embaras", correct: false },
        { text: "Embarras", correct: false },
        { text: "Emberras", correct: false }
    ]},
    { section: "Verbal", question: "What is the plural of 'Cactus'?", answers: [
        { text: "Cacti", correct: true },
        { text: "Cactuses", correct: false },
        { text: "Cactis", correct: false },
        { text: "Cactus", correct: false }
    ]},
    { section: "Verbal", question: "Choose the correct word: 'She __ to the store.'", answers: [
        { text: "went", correct: true },
        { text: "go", correct: false },
        { text: "goed", correct: false },
        { text: "going", correct: false }
    ]},
    { section: "Verbal", question: "Find the correctly spelled word:", answers: [
        { text: "Necessary", correct: true },
        { text: "Necesary", correct: false },
        { text: "Neccessary", correct: false },
        { text: "Nesessary", correct: false }
    ]},
    { section: "Verbal", question: "Synonym of 'Generous'?", answers: [
        { text: "Kind", correct: true },
        { text: "Selfish", correct: false },
        { text: "Greedy", correct: false },
        { text: "Rude", correct: false }
    ]},
    { section: "Verbal", question: "Which word means the opposite of 'Expand'?", answers: [
        { text: "Shrink", correct: true },
        { text: "Grow", correct: false },
        { text: "Increase", correct: false },
        { text: "Widen", correct: false }
    ]},
    { section: "Verbal", question: "Choose the correct synonym for 'Artificial':", answers: [
        { text: "Man-made", correct: true },
        { text: "Real", correct: false },
        { text: "Natural", correct: false },
        { text: "Genuine", correct: false }
    ]},
    { section: "Verbal", question: "What is the plural of 'Child'?", answers: [
        { text: "Children", correct: true },
        { text: "Childs", correct: false },
        { text: "Childes", correct: false },
        { text: "Child's", correct: false }
    ]},
    { section: "Verbal", question: "What is the meaning of 'Reluctant'?", answers: [
        { text: "Unwilling", correct: true },
        { text: "Excited", correct: false },
        { text: "Eager", correct: false },
        { text: "Happy", correct: false }
    ]},
    { section: "Verbal", question: "What is the opposite of 'Friend'?", answers: [
        { text: "Enemy", correct: true },
        { text: "Companion", correct: false },
        { text: "Ally", correct: false },
        { text: "Partner", correct: false }
    ]},
    { section: "Verbal", question: "Which sentence is correct?", answers: [
        { text: "I have a blue car.", correct: true },
        { text: "I has a blue car.", correct: false },
        { text: "I is have a blue car.", correct: false },
        { text: "I am have a blue car.", correct: false }
    ]},
    { section: "Verbal", question: "What is the plural of 'Goose'?", answers: [
        { text: "Geese", correct: true },
        { text: "Gooses", correct: false },
        { text: "Goosies", correct: false },
        { text: "Goose", correct: false }
    ]},
    { section: "Verbal", question: "Which word is a synonym for 'Lazy'?", answers: [
        { text: "Idle", correct: true },
        { text: "Hardworking", correct: false },
        { text: "Busy", correct: false },
        { text: "Energetic", correct: false }
    ]},
    { section: "Verbal", question: "Which word is the opposite of 'Polite'?", answers: [
        { text: "Rude", correct: true },
        { text: "Kind", correct: false },
        { text: "Nice", correct: false },
        { text: "Friendly", correct: false }
    ]},
    { section: "Verbal", question: "What is the meaning of 'Benevolent'?", answers: [
        { text: "Kind and generous", correct: true },
        { text: "Selfish", correct: false },
        { text: "Evil", correct: false },
        { text: "Careless", correct: false }
    ]},
    { section: "Verbal", question: "Which sentence is grammatically correct?", answers: [
        { text: "She is going to school.", correct: true },
        { text: "She going to school.", correct: false },
        { text: "She am going to school.", correct: false },
        { text: "She go to school.", correct: false }
    ]},
    { section: "Reasoning", question: "What comes next in the sequence? 2, 4, 8, 16, ?", answers: [
        { text: "32", correct: true },
        { text: "24", correct: false },
        { text: "48", correct: false },
        { text: "64", correct: false }
    ]},
    { section: "Reasoning", question: "Which number is missing? 3, 6, 9, ?, 15", answers: [
        { text: "12", correct: true },
        { text: "11", correct: false },
        { text: "13", correct: false },
        { text: "10", correct: false }
    ]},
    { section: "Reasoning", question: "Which word does not belong to the group?", answers: [
        { text: "Apple", correct: false },
        { text: "Mango", correct: false },
        { text: "Orange", correct: false },
        { text: "Carrot", correct: true }
    ]},
    { section: "Reasoning", question: "Find the odd one out: 2, 4, 6, 8, 11", answers: [
        { text: "11", correct: true },
        { text: "4", correct: false },
        { text: "8", correct: false },
        { text: "6", correct: false }
    ]},
    { section: "Reasoning", question: "If 2+3=10, 3+4=21, 4+5=32, then 5+6=?", answers: [
        { text: "45", correct: true },
        { text: "35", correct: false },
        { text: "42", correct: false },
        { text: "50", correct: false }
    ]},
    { section: "Reasoning", question: "John is taller than David but shorter than Paul. Who is the tallest?", answers: [
        { text: "Paul", correct: true },
        { text: "John", correct: false },
        { text: "David", correct: false },
        { text: "All are equal", correct: false }
    ]},
    { section: "Reasoning", question: "Find the missing letter: A, C, E, G, ?", answers: [
        { text: "I", correct: true },
        { text: "H", correct: false },
        { text: "J", correct: false },
        { text: "F", correct: false }
    ]},
    { section: "Reasoning", question: "A is the father of B, but B is not the son of A. How is this possible?", answers: [
        { text: "B is a daughter", correct: true },
        { text: "B is an uncle", correct: false },
        { text: "B is a father", correct: false },
        { text: "B is a nephew", correct: false }
    ]},
    { section: "Reasoning", question: "If all Dogs are Cats and some Cats are Lions, then some Dogs are Lions?", answers: [
        { text: "Can't say", correct: true },
        { text: "True", correct: false },
        { text: "False", correct: false },
        { text: "All are Lions", correct: false }
    ]},
    { section: "Reasoning", question: "What is the missing number? 7, 14, 28, 56, ?", answers: [
        { text: "112", correct: true },
        { text: "84", correct: false },
        { text: "72", correct: false },
        { text: "90", correct: false }
    ]},
    { section: "Reasoning", question: "What comes next in the pattern? 1, 4, 9, 16, ?", answers: [
        { text: "25", correct: true },
        { text: "20", correct: false },
        { text: "30", correct: false },
        { text: "36", correct: false }
    ]},
    { section: "Reasoning", question: "Which number is the odd one out? 11, 17, 23, 27, 31", answers: [
        { text: "27", correct: true },
        { text: "11", correct: false },
        { text: "23", correct: false },
        { text: "31", correct: false }
    ]},
    { section: "Reasoning", question: "Find the missing number: 3, 9, 27, ?", answers: [
        { text: "81", correct: true },
        { text: "54", correct: false },
        { text: "72", correct: false },
        { text: "90", correct: false }
    ]},
    { section: "Reasoning", question: "If TABLE is written as GZYOV, how is CHAIR written?", answers: [
        { text: "XSRMO", correct: true },
        { text: "YSQMP", correct: false },
        { text: "WTRMN", correct: false },
        { text: "VUTRQ", correct: false }
    ]},
    { section: "Reasoning", question: "In a row of students, if Priya is 10th from the left and 15th from the right, how many students are there?", answers: [
        { text: "24", correct: true },
        { text: "23", correct: false },
        { text: "25", correct: false },
        { text: "26", correct: false }
    ]},
    { section: "Reasoning", question: "Which number replaces the question mark? 2, 6, 12, 20, ?", answers: [
        { text: "30", correct: true },
        { text: "26", correct: false },
        { text: "28", correct: false },
        { text: "32", correct: false }
    ]},
    { section: "Reasoning", question: "If South-East becomes North, what will North-East become?", answers: [
        { text: "West", correct: true },
        { text: "South-West", correct: false },
        { text: "East", correct: false },
        { text: "North-West", correct: false }
    ]},
    { section: "Reasoning", question: "Which one does not belong to the group?", answers: [
        { text: "Pen", correct: false },
        { text: "Pencil", correct: false },
        { text: "Book", correct: false },
        { text: "Apple", correct: true }
    ]},
    { section: "Reasoning", question: "What comes next in the sequence? Z, X, V, T, ?", answers: [
        { text: "R", correct: true },
        { text: "P", correct: false },
        { text: "S", correct: false },
        { text: "Q", correct: false }
    ]},
    { section: "Reasoning", question: "A clock shows 3:15. What is the angle between the hour and minute hand?", answers: [
        { text: "7.5 degrees", correct: true },
        { text: "15 degrees", correct: false },
        { text: "30 degrees", correct: false },
        { text: "45 degrees", correct: false }
    ]},
    
]  
  

let currentQuestionIndex = 0;
let score = 0;
let totalStars = 0;
let questionsAttempted = 0;
let timer;
let timeLeft = 60;
let userAnswers = [];

const sectionTitle = document.getElementById("section-title");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");
const starsElement = document.getElementById("stars");
const messageElement = document.getElementById("message");
const resultContainer = document.getElementById("result-container");
const quizContainer = document.getElementById("quiz-container");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    totalStars = 0;
    questionsAttempted = 0;
    userAnswers = [];
    resultContainer.style.display = "none";
    quizContainer.style.display = "block";
    showQuestion();
}
// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle questions and also shuffle options
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    // Shuffle options inside each question
    array.forEach(q => shuffleArray(q.answers));
}

// Call before displaying the first question
shuffleQuestions(questions);

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    sectionTitle.innerText = currentQuestion.section;
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });

    startTimer();
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
    starsElement.innerText = "";
    messageElement.innerText = "";
    clearInterval(timer);
    timeLeft = 60;
    timerElement.innerText = `Time Left: ${timeLeft}s`;
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    showStars(0);
    messageElement.innerText = "⏳ Time's up!";
    nextButton.style.display = "block";
}

function selectAnswer(e) {
    clearInterval(timer);
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    questionsAttempted++;

    if (correct) {
        score++;
        selectedButton.style.backgroundColor = "green";
        awardStars(timeLeft);
    } else {
        selectedButton.style.backgroundColor = "red";
        showStars(0);
        messageElement.innerText = "❌ Incorrect!";
    }

    // Store user's answer
    let currentQuestion = questions[currentQuestionIndex];
    let correctAnswer = currentQuestion.answers.find(a => a.correct).text;
    userAnswers.push({ 
        question: currentQuestion.question, 
        selected: selectedButton.innerText, 
        correct: correctAnswer 
    });

    nextButton.style.display = "block";
}

function awardStars(timeRemaining) {
    let stars = timeRemaining > 40 ? 3 : timeRemaining > 20 ? 2 : 1;
    totalStars += stars;
    showStars(stars);

    // Set encouraging message based on time
    if (stars === 3) {
        messageElement.innerText = "🌟 Excellent!";
    } else if (stars === 2) {
        messageElement.innerText = "😊 Good!";
    } else {
        messageElement.innerText = "😃 Great!";
    }
}


function showStars(stars) {
    starsElement.innerText = "⭐".repeat(stars);
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    document.getElementById("attempted").innerText = `Questions Attempted: ${questionsAttempted}`;
    document.getElementById("correct").innerText = `Correct Answers: ${score} out of 60`;
    document.getElementById("total-stars").innerText = `Total Stars Earned: ${totalStars} ⭐`;

    // Save user answers to localStorage for review page
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));

    document.getElementById("review-btn").addEventListener("click", () => {
        window.location.href = "review.html";
    });

    document.getElementById("restart-btn").addEventListener("click", startQuiz);
}

startQuiz();