<template>
  <div class="container">
      <div id="end" class="flex-center flex-column">
        <h1 id="finalScore"></h1>
        <form>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            v-model="name"
          >
          <button
            type="submit"
            class="btn"
            id="saveScoreBtn"
            @click.prevent="saveHighScore()"
            disabled
          >
            Save
          </button>
        </form>
        <router-link class="btn" to="/stage">Play Again</router-link>
        <router-link class="btn" to="/">Go Home</router-link>
      </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
          name : ''
      }
    },
    methods:{
        endGame(){
            const username = document.getElementById('username');
            const saveScoreBtn = document.getElementById('saveScoreBtn');
            const finalScore = document.getElementById('finalScore');
            const mostRecentScore = localStorage.getItem('mostRecentScore');

            const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

            const MAX_HIGH_SCORES = 5;

            finalScore.innerText = mostRecentScore;

            username.addEventListener('keyup', () => {
                saveScoreBtn.disabled = !username.value;
            });
        },
        saveHighScore(){
            const mostRecentScore = localStorage.getItem('mostRecentScore');
            const score = {
                    score: mostRecentScore,
                    name: this.name
            };
            const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
            highScores.push(score);
            highScores.sort((a, b) => b.score - a.score);
            highScores.splice(5);

            localStorage.setItem('highScores', JSON.stringify(highScores));
            return window.location.href = '/test';
        }
    },
    mounted(){
        this.endGame();
    }
}
</script>

<style>
#finalScore{
  text-align: center;
}
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
</style>