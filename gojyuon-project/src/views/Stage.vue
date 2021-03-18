<template>
  <h1>五十音洞窟</h1>
  <button class="tablink nowtab" @click="toggleH" ref="hTab">平假名</button>
  <button class="tablink" @click="toggleK" ref="kTab">片假名</button>
  <div id="hiragana" class="tabcontent">
    <div v-if="openPageH">
      <button class="stagebtn" id="stg1btn" @click="toggleHT1">第一層</button>
      <button class="stagebtn" id="stg2btn" @click="toggleHT2" v-if="Hstg2">第二層</button>
      <button class="stagebtn" id="stg2btn" disabled v-else><i class="material-icons icons">lock</i></button>
      <button class="stagebtn" id="stg3btn" @click="toggleHT3" v-if="Hstg3">第三層</button>
      <button class="stagebtn" id="stg3btn" disabled v-else><i class="material-icons icons">lock</i></button>
      <button class="stagebtn" id="stg4btn" @click="toggleHT4" v-if="Hstg4">第四層</button>
      <button class="stagebtn" id="stg4btn" disabled v-else><i class="material-icons icons">lock</i></button>
      <button class="stagebtn" id="stg5btn" @click="toggleHT5" v-if="Hstg5">第五層</button>
      <button class="stagebtn" id="stg5btn" disabled v-else><i class="material-icons icons">lock</i></button>
    </div> 
  </div>
  <div id="katakana" class="tabcontent">
    <div v-if="openPageK">
      <button class="stageKbtn" id="stgK1btn" @click="toggleKT1">第一層</button>
      <button class="stageKbtn" id="stgK2btn" @click="toggleKT2" v-if="Kstg2">第二層</button>
      <button class="stageKbtn" id="stgK2btn" disabled v-else><i class="material-icons icons">lock</i></button>
      <button class="stageKbtn" id="stgK3btn" @click="toggleKT3" v-if="Kstg3">第三層</button>
      <button class="stageKbtn" id="stgK3btn" disabled v-else><i class="material-icons icons">lock</i></button>
      <button class="stageKbtn" id="stgK4btn" @click="toggleKT4" v-if="Kstg4">第四層</button>
      <button class="stageKbtn" id="stgK4btn" disabled v-else><i class="material-icons icons">lock</i></button>
      <button class="stageKbtn" id="stgK5btn" @click="toggleKT5" v-if="Kstg5">第五層</button>
      <button class="stageKbtn" id="stgK5btn" disabled v-else><i class="material-icons icons">lock</i></button>
    </div> 
  </div>
</template>

<script>
export default {
    data(){
      return{
        openPageH: true,
        openPageK: false,
        Hstg2: false,
        Hstg3: false,
        Hstg4: false,
        Hstg5: false,
        Kstg2: false,
        Kstg3: false,
        Kstg4: false,
        Kstg5: false
      }
    },
    methods:{
      toggleH(){
        this.openPageH = true
        this.openPageK = false
        this.$refs.kTab.classList.remove("nowtab")
        this.$refs.hTab.classList.add("nowtab")
        },
      toggleK(){
        this.openPageK = true
        this.openPageH = false
        this.$refs.hTab.classList.remove("nowtab")
        this.$refs.kTab.classList.add("nowtab")
      },
      toggleHT1(){
        localStorage.setItem('nextStage', 'H1');  
        return window.location.href = '/test';
      },
      toggleHT2(){
        localStorage.setItem('nextStage', 'H2');  
        return window.location.href = '/test';
      },
      toggleHT3(){
        localStorage.setItem('nextStage', 'H3');  
        return window.location.href = '/test';
      },
      toggleHT4(){
        localStorage.setItem('nextStage', 'H4');  
        return window.location.href = '/test';
      },
      toggleHT5(){
        localStorage.setItem('nextStage', 'H5');  
        return window.location.href = '/test';
      },
      toggleKT1(){
        localStorage.setItem('nextStage', 'K1');  
        return window.location.href = '/test';
      },
      toggleKT2(){
        localStorage.setItem('nextStage', 'K2');  
        return window.location.href = '/test';
      },
      toggleKT3(){
        localStorage.setItem('nextStage', 'K3');  
        return window.location.href = '/test';
      },
      toggleKT4(){
        localStorage.setItem('nextStage', 'K4');  
        return window.location.href = '/test';
      },
      toggleKT5(){
        localStorage.setItem('nextStage', 'K5');  
        return window.location.href = '/test';
      },
    },
}
</script>

<style>
h1{
  color: saddlebrown;
  text-align: center;
}

.stagebtn, .stageKbtn{
  background-color: grey; 
  border: none;
  padding: 15px 32px;
  margin: auto;
  margin-bottom: 30px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  border-radius: 4px;
}

.tablink{
  background-color: #aaa;
  color: white;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  font-size: 17px;
  width: 50%;
  margin-bottom: 10px;
}

.nowtab, .tablink:hover{
  background-color: #555;
}
</style>