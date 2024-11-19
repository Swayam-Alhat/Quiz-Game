const startButton = document.getElementById("start-button");
const questionContainer = document.getElementById("QA-container");
const questionPara = document.getElementById("question-para");
const optionList = document.getElementById("option-list");
const nextButton = document.getElementById("next-button");
const scorePara = document.getElementById("score-para");
const restartButton = document.getElementById("restart-button");
// main object of question and its answer.
const mainObj = {
  "What is capital of India?": "New Delhi",
  "which is biggest planet in Galaxy?": "Jupiter",
  "Who is the richest person?": "Wes watson",
  "Who is preserver of universe?": "Vishnu",
  "What is the capital of France?": "Paris",
  "Which planet is known as the Red Planet?": "Mars",
  "Who wrote the play 'Romeo and Juliet'?": "William Shakespeare",
  "What is the largest mammal on Earth?": "Blue Whale",
};
// array of options.
const optionsArr = [
  ["Chennai", "New Delhi", "Pune City", "Mumbai"],
  ["Mars", "Earth", "Jupiter", "Sun"],
  ["Shubham Alhat", "Sam altman", "Elon Musk", "Wes watson"],
  ["Vishnu", "Mahesh", "Bramha", "Hanuman"],
  ["Paris", "London", "Rome", "Berlin"],
  ["Earth", "Mars", "Venus", "Jupiter"],
  ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
  ["African Elephant", "Blue Whale", "Giraffe", "Rhinoceros"],
];

let optionCount = 0;
let questionCount = 0;
let score = 0;

// add eventlistener to restart button.
restartButton.addEventListener("click", () => {
  location.reload();
});

// function for displaying
function finalResult() {
  for (const btn of optionList.children) {
    btn.classList.add("bg-zinc-800");
  }
  scorePara.classList.remove("hidden");
  restartButton.classList.remove("hidden");
  scorePara.innerText = `Your Score : ${score} Out Of ${optionsArr.length}.`;
}

// calling updateScore function for checking and updating score
function updateScore(userAnswer, question) {
  if (userAnswer == mainObj[question]) {
    score++;
  }
}

// function to display questions and answers.
function displayQA() {
  nextButton.classList.add("hidden");
  let question = Object.keys(mainObj)[questionCount];
  questionPara.innerText = question;
  let j = 0;
  for (let opt of optionsArr[optionCount]) {
    let option = optionList.children[j];
    option.innerText = opt;
    option.style.backgroundColor = "";
    // able the button..
    option.disabled = false;
    option.classList.add("bg-zinc-800");
    option.addEventListener("click", () => {
      option.classList.remove("bg-zinc-800", "hover:bg-neutral-950");
      option.style.backgroundColor = "#010101";
      // disable the button..
      for (const btn of optionList.children) {
        btn.disabled = true;
      }
      nextButton.classList.remove("hidden");
      let userAnswer = option.innerText;
      nextButton.classList.remove("hidden");
      // checking and updating score
      updateScore(userAnswer, question);
    });

    j++;
  }
}

// adding event listener to start button.
startButton.addEventListener("click", () => {
  questionContainer.classList.remove("hidden");
  startButton.classList.add("hidden");
  displayQA();
});

// adding event listener to next button.
nextButton.addEventListener("click", () => {
  if (questionCount == optionsArr.length - 1) {
    nextButton.classList.add("hidden");
    finalResult();
  } else {
    optionCount++;
    questionCount++;
    displayQA();
  }
});

// a......................................./>>>>>>>>>>>>>
