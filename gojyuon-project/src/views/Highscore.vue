<template>
  <div class="container">
    <div id="highScores" class="flex-center flex-column">
      <h1 id="finalScore">High Scores</h1>
      <ul id="highScoresList"></ul>
      <a class="btn" href="/">Go Home</a>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    highscores(){
      const highScoresList = document.getElementById("highScoresList");
      const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
      console.log(highScores)
      highScoresList.innerHTML = highScores
        .map(score => {
          return `<li class="high-score">${score.name} - ${score.score}</li>`;
        })
        .join("");
    }
  },
  mounted(){
    this.highscores();
  }
}
</script>

<style>
.btn {
  font-size: 18px;
  margin: 0px auto;
  width: 20rem;
  text-align: center;
  border: 0.1rem solid #56a5eb;
  margin-bottom: 1rem;
  text-decoration: none;
  color: #56a5eb;
  background-color: white;
  display: block;
}

.btn:hover {
  cursor: pointer;
  box-shadow: 0 0.4rem 1.4rem 0 rgba(86, 185, 235, 0.5);
  transform: translateY(-0.1rem);
  transition: transform 150ms;
}

.btn[disabled]:hover {
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
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
</style>