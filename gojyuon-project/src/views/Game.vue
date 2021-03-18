<template>
  <div class="container">
    <div id="loader"></div>
    <div id="game" class="justify-center flex-column hidden">
      <div id="hud">
          <div id="hud-item">
            <p id="progressText" class="hud-prefix">
              Question
            </p>
            <div id="progressBar">
              <div id="progressBarFull"></div>
            </div>
          </div>
          <div id="hud-item">
            <p class="hud-prefix">
              Score
            </p>
            <h1 class="hud-main-text" id="score">
              0
            </h1>
          </div>
      </div>  
    
      <h2 id="question"></h2>
      <div class="choice-container">
        <p class="choice-prefix">A</p>
        <p class="choice-text" data-number="1"></p>
      </div>
      <div class="choice-container">
        <p class="choice-prefix">B</p>
        <p class="choice-text" data-number="2"></p>
      </div>
      <div class="choice-container">
        <p class="choice-prefix">C</p>
        <p class="choice-text" data-number="3"></p>
      </div>
      <div class="choice-container">
        <p class="choice-prefix">D</p>
        <p class="choice-text" data-number="4"></p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  emits: ['closeNav'],
  methods:{
      startexam(){
          const question = document.getElementById("question");
          const choices = Array.from(document.getElementsByClassName("choice-text"));
          const progressText = document.getElementById("progressText");
          const scoreText = document.getElementById("score");
          const progressBarFull = document.getElementById("progressBarFull");
          const loader = document.getElementById('loader');
          const game = document.getElementById('game');

          let currentQuestion = {};
          let acceptingAnswers = false;
          let score = 0;
          let questionCounter = 0;
          let availableQuesions = [];
          let wrongnum = 0;

          let questions = [];

          /* fetch('questions/H1.json') */
          fetch(checkStage())
              .then((res) => {
                  return res.json();
              })
              .then((loadedQuestions) => {
                  questions = loadedQuestions;
                  console.log()
                  startGame();
              })
              .catch((err) => {
                  console.error(err);
              });

          //CONSTANTS
          const CORRECT_BONUS = 10;
          const MAX_QUESTIONS = 10;

          function startGame(){
              questionCounter = 0;
              score = 0;
              availableQuesions = [...questions];
              getNewQuestion();
              game.classList.remove('hidden');
              loader.classList.add('hidden');
          };

          function getNewQuestion(){
          if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS || wrongnum === 5) {
              localStorage.setItem("mostRecentScore", score);
              //go to the end page
              /* return window.location.assign("/pages/end.html"); */
              return window.location.href = '/end';
          }
          questionCounter++;
          progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
          //Update the progress bar
          //progressBarFull.style.width = `${(1 - (questionCounter / MAX_QUESTIONS) + 0.2)* 100}%`; 五題所以先加1/5 讓他滿
          progressBarFull.style.width = `${(1 - (wrongnum / 5))* 100}%`; 

          const questionIndex = Math.floor(Math.random() * availableQuesions.length);
          currentQuestion = availableQuesions[questionIndex];
          question.innerText = currentQuestion.question;

          choices.forEach(choice => {
              const number = choice.dataset["number"];
              choice.innerText = currentQuestion["choice" + number];
          });

          availableQuesions.splice(questionIndex, 1);
          acceptingAnswers = true;
          };

          choices.forEach(choice => {
          choice.addEventListener("click", e => {
              if (!acceptingAnswers) return;

              acceptingAnswers = false;
              const selectedChoice = e.target;
              const selectedAnswer = selectedChoice.dataset["number"];

              const classToApply =
              selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

              if (classToApply === "correct") {
                  incrementScore(CORRECT_BONUS);
              }
              else{
                wrongnum ++;
                console.log(wrongnum);
              }

              selectedChoice.parentElement.classList.add(classToApply);

              setTimeout(() => {
              selectedChoice.parentElement.classList.remove(classToApply);
              getNewQuestion();
              }, 1000);
          });
          });

          function incrementScore(num){
            score += num;
            scoreText.innerText = score;
          };

          function checkStage(){
            var stage = localStorage.getItem('nextStage');
            if(stage === 'H1'){
              return 'questions/H1.json'
            }
            else if(stage === 'H2'){
              return 'questions/H2.json'
            }
            else if(stage === 'H3'){
              return 'questions/H3.json'
            }
            else if(stage === 'H4'){
              return 'questions/H4.json'
            }
            else if(stage === 'H5'){
              return 'questions/H5.json'
            }
            else if(stage === 'H5'){
              return 'questions/H5.json'
            }
            else if(stage === 'K1'){
              return 'questions/K1.json'
            }
            else if(stage === 'K2'){
              return 'questions/K2.json'
            }
            else if(stage === 'K3'){
              return 'questions/K3.json'
            }
            else if(stage === 'K4'){
              return 'questions/K4.json'
            }
            else if(stage === 'K5'){
              return 'questions/K5.json'
            }
          }

      },
      closeNav(){
        this.$emit('closeNav')
      },
      /* resetBG(){
        console.log(document.body);
        document.body.style.backgroundImage = 'url()';
      },
      setBG(){
        document.body.style.backgroundImage = 'url(../../src/assets/cave.jpg)'
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundPosition = 'center'
        document.body.style.height = '313px'
      } */

  },
  mounted(){
      this.closeNav();
      this.startexam();
      //this.setBG();
  },
  beforeUnmount(){
    //this.resetBG();
    this.closeNav();
  }
}
</script>

<style>
/* body{
  background-image: url(../../src/assets/cave.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 313px;
}  */

#question{
  font-size: 25px;
  color:white;
}

.choice-container {
  display: flex;
  margin-bottom: 5px;
  width: 100%;
  font-size: 18px;
  border: 1px solid rgb(86, 165, 235, 0.25);
  background-color: white;
}

.choice-container:hover {
  cursor: pointer;
  box-shadow: 0 4px 14px 0 rgba(86, 185, 235, 0.5);
  transform: translateY(-1px);
  transition: transform 150ms;
}

.choice-prefix {
  padding: 33px 25px;
  background-color: #56a5eb;
  color: white;
  margin: 0;
}

.choice-text {
  padding: 15px;
  width: 100%;
}

.correct {
  background-color: #28a745;
}

.incorrect {
  background-color: #dc3545;
}

/* HUD */
#hud {
  display: flex;
  justify-content: space-between;
}

.hud-prefix {
  text-align: center;
  font-size: 20px;
  color:white;
}

.hud-main-text {
  text-align: center;
  color:white;
}

#progressText{
  color:white;
}
#progressBar {
  width: 200px;
  height: 40px;
  border: 3px solid #56a5eb;
  margin-top: 50px;
}

#progressBarFull {
  height: 34px;
  background-color: #dd3529;
  width: 100%;
}

/* FORMS */
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin-bottom: 10px;
  width: 200px;
  padding: 15px;
  font-size: 18px;
  border: none;
  box-shadow: 0 1px 14px 0 rgba(86, 185, 235, 0.5);
}

input::placeholder {
  color: #aaa;
}

/* Highscores */
#highScoresList {
  list-style: none;
  padding-left: 0;
  margin-bottom: 40px;
}

.high-score {
  font-size: 28px;
  margin-bottom: 5px;
}

.high-score:hover {
  transform: scale(1.025);
}

/* Loader */
#loader {
  border: 16px solid white;
  border-radius: 50%;
  border-top: 16px solid #56a5eb;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>