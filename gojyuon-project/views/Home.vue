<template>
  <div class="home" v-if="showHome">
    <h1 id="title-words">五十音大冒險</h1>
      <img id="main-picture" class="img-rounded" src="..\..\src\assets\doukutsu.png">
    <div class="main-par">
      你跟著藏寶圖，<br>找到了一個詭異的洞窟。<br><br> 洞窟貌似不只一層，<br>且裡面充滿了奇妙的文字。 <br><br> 為了拿到藏在深處的寶藏，<br>你拿著家裡代代相傳的假名表，<br>準備將他熟讀後，<br>就向著洞窟內部出發...
    </div>
  </div>
  <Treasure v-if="showTreasure"/>
  <div style=" text-align: center;">
    <button @click="toggleTreasure"  id="toggleTreasure">打開收藏庫</button>
  </div>
  
  
</template>

<script>
// @ is an alias to /src
import Treasure from './tools/Treasure'
export default {
  name: 'Home',
  components: { 
    Treasure
  },
  data(){
    return{
      showHome: true,
      showTreasure: false
    }
  },
  methods:{
    toggleTreasure(){
      this.showHome = !this.showHome
      this.showTreasure = !this.showTreasure
      if(this.showTreasure === true){
        document.getElementById("toggleTreasure").innerHTML = "關閉收藏庫";
      }
      else{
        document.getElementById("toggleTreasure").innerHTML = "打開收藏庫";
      }
    }
  }
}
</script>

<style>
/* main page */
html{
  background-color:navajowhite;
}

#title-words{
  font-size: 30px;
  text-align: center;
  color: white;
}

#main-picture{
  display: block;
  margin: 0 auto;
  width: 80%;
}

.main-par {
  color: #7a7a7a;
  font-size: 18px;
  text-align: center;
  vertical-align: baseline;
  line-height: 1.5;
  margin: 0px 20px 10px 20px;
  background: #fcca8d;
  border-radius: 10px;
}

#toggleTreasure{
  height:34px;
  margin:0 auto;
  background-color: rgb(238, 186, 90);
  border: none;
  border-radius: 8px;
}
</style>