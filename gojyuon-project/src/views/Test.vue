<template>
  <div class="containerT">
    <div id="home" class="flex-center flex-column">
      <h1>測驗</h1>
      <router-link class="btn" to="/game">Play</router-link>
      <router-link class="btn" to="/highscore">High Scores</router-link>
    </div>
  </div>
  <button @click="openstage">OPEN 2</button>
</template>

<script>
export default {
  methods:{
    openstage(){
      localStorage.setItem('isHstg2', 'on');
    }
  },
}
</script>

<style>
.containerT {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80rem;
  margin: 0 auto;
  padding: 20px;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.flex-center {
  justify-content: center;
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.text-center {
  text-align: center;
}

.hidden {
  display: none;
}

/* BUTTONS */
.btn {
  font-size: 18px;
  padding: 0 auto;
  width: 20rem;
  text-align: center;
  border: 0.1rem solid #56a5eb;
  margin-bottom: 1rem;
  text-decoration: none;
  color: #56a5eb;
  background-color: white;
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