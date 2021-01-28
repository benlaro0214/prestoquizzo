// global variables
var countdownTimer
var countdownValue 
var questionNum

var questions = [
  { question: "Who created Linux?", 
    answers: [ "Justin Bieber", "Johnathan Bell", "Linus Torvalds" ],
    correct: "Linus Torvalds" },
  { question: "Who invented the iPhone?", 
    answers: [ "Hewlett Packard", "Steve Jobs", "Steve Jacobs" ],
    correct: "Steve Jobs" },
  { question: "Who invented the internet?",
    answers: [ "Aliens", "Europe", "DARPA" ],
    correct: "DARPA" }
]


function showNextQuestion(){
  var question = questions[questionNum]
  var questionEl = document.querySelector('#questionBox')
  // display question
  questionEl.innerHTML = `
    <div class="alert alert-warning"><h3>${question.question}</h3>
    `
  // loop through and show each answer as a button
  for( var i=0; i < question.answers.length; i++ ){
    var answer = question.answers[i]
    questionEl.innerHTML += `
    <button onClick="selectAnswer(event,'${answer}')" class="btn btn-secondary btn-block">${answer}</button>
    `
  }
}

function selectAnswer( event,answer ){
  event.preventDefault()
  console.log( `question answer id: ${answer}` )
  if( answer===questions[questionNum].correct ){
    console.log( `good job! correct answer: ${answer}` )
  } else {
    console.log( `sorry mate, you loose, -10` )
    timerDecreaseAndDisplay(10)
  }
  questionNum++
  // decide to show next question (if more), else end quiz
  if( questionNum<questions.length )
    showNextQuestion()
  else
    finishQuiz()
}

function timerDecreaseAndDisplay( byValue=1 ){
  // decrease by the value passed in, or if nothing, by 1
  countdownValue -= byValue
  document.querySelector('#countdown').textContent = countdownValue
  if( countdownValue<1 )
    finishQuiz()
}

function showPage( page ){
  // hide all pages
  document.querySelector('#quizPage').classList.add('d-none')
  document.querySelector('#scorePage').classList.add('d-none')
  // show selected page
  document.querySelector(`#${page}`).classList.remove('d-none')
}

function finishQuiz(event){
  if( event ) event.preventDefault()
  console.log( `finished` )
  // stop the countdown
  clearInterval( countdownTimer )
  // show score page
  showPage( 'scorePage' )

  // display the name capture + leaderboard
  // ...
}

// START: 
// - start timer
// - show questions
function startQuiz(){
  questionNum = 0
  countdownValue = 60
  countdownTimer = setInterval( timerDecreaseAndDisplay, 1000 )
  // switch back to the quizPage
  showPage( 'quizPage' )
  showNextQuestion()
}
startQuiz()
