
// create quiz questions using objects
const quizQuestions = [
  {
    question: 'Who was the first black president of the United States?', 
    a: 'Tanahase Coates',
    b: 'Barack Obamar',
    c: 'Jamal Obamar',
    d: 'Douglas Johnson',
    correct: 'b'
  }, {
    question: 'Which two men created Apple Inc?',
    a: 'Steve & Job',
    b: 'John & Smith',
    c: 'Larry & Paige',
    d: 'Jobs & Wozniak',
    correct: 'd'
  }, {
    question: 'Which of these is a basketball legend?',
    a: 'Cristiano Ronaldo',
    b: 'Rihanna',
    c: 'Serena Williams',
    d: 'Neil Armstrong',
    correct: 'c'
  }, {
    question: 'Which goes by the nickname Queen B?',
    a: 'Beyonce',
    b: 'Serena Williams',
    c: 'Nicki Minaj',
    d: 'Pearl Thusi',
    correct: 'a'
  }, {
    question: 'Which is responsible for a continent?',
    a: 'UN',
    b: 'AU',
    c: 'WHO',
    d: 'Commonwealth of Nations',
    correct: 'b'
  }
];

// selectors
const quiz = document.querySelector('.quiz');
const numerator = document.querySelector('.numerator');
const answersElement = document.querySelectorAll('.answer');
const questionElement = document.querySelector('.question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('.submit');
const questionsAnswered = document.querySelector('qtn');

// create counter to keep track of questions
let quizTimer = 0;
let score = 0;


// initial call to function
loadQuiz();

// create function to load quiz questions
function loadQuiz() {
  deSelect();
  showResult();
  const currentQuiz = quizQuestions[quizTimer];

  // show update question element on the document
  questionElement.innerHTML = currentQuiz.question;

  // display answers in the document
  a_text.innerText = currentQuiz.a;
  b_text.innerText = currentQuiz.b;
  c_text.innerText = currentQuiz.c;
  d_text.innerText = currentQuiz.d;
}


// create function for selected answer
function selectedOption() {
  
  let answer = undefined;

  answersElement.forEach((answerElement) => {
    if(answerElement.checked) {
      answer =  answerElement.id;
    }
  });

    return answer;  
}

function deSelect() {
  
  answersElement.forEach((answerElement) => {
    answerElement.checked = false;
  });
}


function showResult() {
  numerator.innerText = score;
}
// submit button
submitBtn.addEventListener('click', () => {

  const answer = selectedOption();



  if(answer) {
    if(answer === quizQuestions[quizTimer].correct) {
      score++;
      showResult()
    }
    quizTimer++;
    if(quizTimer < quizQuestions.length) {
      loadQuiz();
  
    } else {
      if(score < 3) {
        quiz.innerHTML = `<h4>Oops, you answered ${score}/${quizQuestions.length} questions correctly</h4>`;
      } else {
        quiz.innerHTML = `<h4>Congratulations! You answered ${score}/${quizQuestions.length} questions correctly</h4>`; 
      }
    }
  
  }

  console.log({answer, score});
  
  
});