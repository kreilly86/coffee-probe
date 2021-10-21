// Quiz section
const quiz = document.getElementById("quiz");
const questionI = document.getElementById("questionE");

const choiceA = document.getElementById('a');
const choiceB = document.getElementById('b');
const choiceC = document.getElementById('c');

let correctScore = 0;
let incorrectScore = 0;

 // Questions- Expert

 let questionsE = [
    {
      questionE: "What flavours would you expect to find from an over extracted coffee?",
        choiceA: "a. Bitter or dry",
        choiceB: "b. Sour or muddled",
        choiceC: "c. Nutty and burnt",
        correctAnswer: "a"
      },  
    {
      questionE: "What tool is used to measure the amount of dissolved coffee particles in water?",
        choiceA: "a. Omitter",
        choiceB: "b. Refractometer",
        choiceC: "c. Probe meter", 
        correctAnswer: "b"
      },
    {
      questionE: "What flavours would you expect from a Washed processed coffee?",
        choiceA: "a. Clean and balanced ",
        choiceB: "b. Rich and chocolately ",
        choiceC: "c. Wild and intense fruit qualities",
        correctAnswer: "a"
      },
    {
      questionE: "What flavours would you expect from a Natural processed coffee?",
        choiceA: "a. Rich and chocolately",
        choiceB: "b Wild and intense fruit qualities.",
        choiceC: "c.Clean and balanced",
        correctAnswer: "b"
      },
    {
      questionE: "What variety of coffee is considered to be the original?",
        choiceA: "a. Bourbon",
        choiceB: "b. Mundo Novo",
        choiceC: "c. Typica",
        correctAnswer: "c"
      },
    {
      questionE: "Which of these varietals are less common in Kenya?",
        choiceA: "a. SL 28",
        choiceB: "b. Geisha",
        choiceC: "c. Batian",
        correctAnswer: "b"
      },
    {
      questionE: "Which country is growing famous for their Geisha varietal?",
        choiceA: "a. Kenya",
        choiceB: "b. Panama",
        choiceC: "c. Colombia",
        correctAnswer: "b"
    },  
    {
      questionE: "If a brewed espresso is over extracted what changes should be made to the beans?",
        choiceA: "a. Should be allowed to rest longer after roasting before use ",
        choiceB: "b. Should be ground finer",
        choiceC: "c. Should be ground coarser",
        correctAnswer: "c"
      },
    { 
      questionE: "What is channeling?",
        choiceA: "a. The beans used to brew coffee are inconsistent in size",
        choiceB: "b. Water has found an easy way through the coffee cake before extraction",
        choiceC: "c. The pressure of the espresso machine temporarily drops causing uneven extraction",
        correctAnswer: "b"
      },
    {
      questionE: "What is the ideal temperature to heat milk to for milk based espresso drinks?",
        choiceA: "a. 55 to 60 degrees celcius",
        choiceB: "b. 70 degrees celcius",
        choiceC: "c. 60 to 65 degrees celcius",
        correctAnswer: "c"
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
        alert(`Sorry you got it wrong! The correct answer is ${questionsE[runningQuestion].correctAnswer}`);
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
