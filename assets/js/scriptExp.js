// Quiz section
const quiz = document.getElementById("quiz");
const questionI = document.getElementById("questionE");

const choiceA = document.getElementById('a');
const choiceB = document.getElementById('b');
const choiceC = document.getElementById('c');

let correctScore = 0;
let incorrectScore = 0;

// Questions - Intermediate

let questionsE = [
  {
    questionE: "Which piece of equipment can be used to make filter coffee?",
      choiceA: "a. A Moka Pot",
      choiceB: "b. A v60",
      choiceC: "c. An espresso machine",
      correctAnswer: "b"
    },  
  {
    questionE: "What is the name given to the used coffee of an espresso shot?",
      choiceA: "a. A circle ",
      choiceB: "b. A disc ",
      choiceC: "c. A puck ", 
      correctAnswer: "c"
    },
  {
    questionE: "Which grind size is most suitable for an aeropress?",
      choiceA: "a. Coarse",
      choiceB: "b. Fine ",
      choiceC: "c. Very fine ",
      correctAnswer: "b"
    },
  {
    questionE: "What is extraction?",
      choiceA: "a. A fan used to cool coffee in the roasting process",
      choiceB: "b. The method by which flavours and other compounds are dissolved in water when coffee is brewed",
      choiceC: "c. The amount of coffee taken from the grinder",
      correctAnswer: "b"
    },
  {
    questionE: "What would be an acceptable brew time for a v60?",
      choiceA: "a. 2 minutes",
      choiceB: "b. 45 seconds",
      choiceC: "c. 5 minutes ",
      correctAnswer: "a"
    },
  {
    questionE: "What is the name of the coffee fruit?",
      choiceA: "a. A coffee cherry",
      choiceB: "b. A coffee grape",
      choiceC: "c. A coffee berry",
      correctAnswer: "a"
    },
  {
    questionE: "What is the ideal rest time after roasting espresso before it is suitable for use?",
      choiceA: "a. 2 weeks",
      choiceB: "b. 7-10 days ",
      choiceC: "c. 2 days",
      correctAnswer: "b"
  },  
  {
    questionE: "What is a cortado?",
      choiceA: "a. One or two shots of coffee mixed with an equal amount of steamed milk",
      choiceB: "b. One or two shots of espresso mixed only with milk foam on top",
      choiceC: "c. A long black coffee with some cold milk added",
      correctAnswer: "a"
    },
  { 
    questionE: "What are the two main types of coffee?",
      choiceA: "a. Syrah and Pinot",
      choiceB: "b. Arabica and Robusta",
      choiceC: "c. Bergamot and Stevia",
      correctAnswer: "b"
    },
  {
    questionE: " Which of these coffees also contains ice cream?",
      choiceA: "a. Affogato",
      choiceB: "b. Ristretto",
      choiceC: "c. Macchiato",
      correctAnswer: "a"
    },  
  ];

// variables

const lastQuestion = questionsE.length -1;
let runningQuestion = 0;
let score = 0;

// function to render a question

function renderQuestion () {
    let q = questionsE[runningQuestion];
    questionE.innerHTML = "<p>" + q.questionE + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

renderQuestion();

// Function to check the answer

function checkAnswer(answer) { 
  if (answer == questionsE[runningQuestion].correctAnswer) {
        // answer is correct
        answerIsCorrect();
        score ++;
      } else {
        // answer is incorrect
        answerIsIncorrect();  
      }
        if (runningQuestion <= lastQuestion) {    
         runningQuestion++; 
         increment(); 
         renderQuestion(); 
        // end of quiz show score
       } else {
         endQuiz();
       }
   }
      
 // Gets the current score from the DOM and increment by 1
 function answerIsCorrect() {
    let oldScore = parseInt(document.getElementById('correct').innerText);
     document.getElementById('correct').innerText= ++oldScore; 
}

function answerIsIncorrect() {
  let oldScore = parseInt(document.getElementById('incorrect').innerText);
  document.getElementById('incorrect').innerText= ++oldScore; 
}

// Progress bar to show user what stage of the quiz they are at  

function increment() {
  let maxWidth = document.getElementById('progress-bar').offsetWidth;
  let currentWidth = document.getElementById('my-progress').offsetWidth;
  let newWidth = currentWidth + maxWidth * .1;
  document.getElementById('my-progress').style.width = `${newWidth}px`;
  let progressTextValue = document.getElementById('progress-text').children[0];
  progressTextValue.innerText = String(Number(progressTextValue.innerText) + 10);
}

// Display results

const scoreDiv = document.getElementById("score");

 function scoreRender() {
    document.getElementById('resultsContainer').style.display = "block";
    document.getElementById('quiz').style.display = "none";
    document.getElementById('progress-bar').style.display = "none";
    document.getElementById('scoreContainer').style.display= "none";
    document.getElementById('logo').style.display= "none";
    document.getElementById('yourScore').style.display= "none";

    let scorePercent = Math.round(10* (score*10)/ questionsE.length);
    let img = (scorePercent > 70) ? 'assets/images/aeropress.png':
              (scorePercent > 50) ? 'assets/images/bar.png' :
              (scorePercent > 20) ? 'assets/images/coffee-bag.png' : 'assets/images/thermometer.png';

          scoreDiv.innerHTML ="<img src="+ img +">";
          scoreDiv.innerHTML +="<p>You scored " + scorePercent + "%!</p>";
 }
