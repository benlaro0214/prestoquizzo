  // Set Global var based on JavaScript Best Practices.
  
  var countDown
  var countdownU 
  var questionNum
  
  //this is where the questions begin. you can add more by copy and pasting the code for the questions.
  var questions = [
// Question 1
{ question: "question goes here", 
answers: [ "answer1", "answer2", "answer3" ],
correct: "Answer1" },
// Question 2
{ question: "question goes here", 
answers: [ "answer4", "answer5", "answer6" ],
correct: "answer6" },
// Qestion 3
{ question: "question goes here", 
answers: [ "answer7", "answer8", "answer9" ],
correct: "answer8" }
]


//The following is the timepiece. The stopwatch indicating the amount of time that is allocated for the test and the reset of said quiz.

//BEGINING OF TIMEPIECE

function timerDecreaseAndDisplay( byValue=1 ){
  // decrease by the value passed in, or if nothing, by 1
  countdownValue -= byValue
  document.querySelector('#countdown').textContent = countdownValue
  if( countdownValue<1 )
    finishLine()
}

function startQuiz(){
  questionNum = 0  //Which question is it starting from?
  countdownValue = 20 // How much time are you giving people to take this quiz? This is measured in seconds. 
  countdownTimer = setInterval( timerDecreaseAndDisplay, 1000 ) //interval between seconds. 
  // switch back to the quizPage
 // showPage( 'quizPage' )
  //showNextQuestion()
}
startQuiz()

function clockStop(event) {
if( event ) event.preventDefault()
// stop the countdown
clearInterval( countdownTimer )
// show score page
showPage( 'scorePage' )
}

//---END OF TIMEPIECE

// function start-line - where your quiz starts



// function questions - Where the vars for the questions get used.

function questionPart(){
  console.log("questionpart done");
}


// function UI - How it all lays out.
function userInt(){


}

// The finish line - How it will end (Scoreboard and reset the game.)
//function finishLine(event) {
 // startQuiz()
