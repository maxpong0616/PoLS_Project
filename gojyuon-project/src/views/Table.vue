<template>
  <h3 class="sub-title">五十音表</h3>
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
    <table class="gojyutable" v-if="openHtable1">
      <tbody>
          <tr>
            <td><button class=a @click="play_audio($event)">あ<br>a</button></td>
            <td><button class=i @click="play_audio($event)">い<br>i</button></td>
            <td><button class=u @click="play_audio($event)">う<br>u</button></td>
            <td><button class=e @click="play_audio($event)">え<br>e</button></td>
            <td><button class=o @click="play_audio($event)">お<br>o</button></td>
          </tr>
          <tr>
            <td><button class=ka @click="play_audio($event)">か<br>ka</button></td>
            <td><button class=ki @click="play_audio($event)">き<br>ki</button></td>
            <td><button class=ku @click="play_audio($event)">く<br>ku</button></td>
            <td><button class=ke @click="play_audio($event)">け<br>ke</button></td>
            <td><button class=ko @click="play_audio($event)">こ<br>ko</button></td>
          </tr>
      </tbody>
    </table>
    <table class="gojyutable" v-if="openHtable2">
      <tbody>
          <tr>
          <td><button class=sa @click="play_audio($event)">さ<br>sa</button></td>
          <td><button class=shi @click="play_audio($event)">し<br>shi</button></td>
          <td><button class=su @click="play_audio($event)">す<br>su</button></td>
          <td><button class=se @click="play_audio($event)">せ<br>se</button></td>
          <td><button class=so @click="play_audio($event)">そ<br>so</button></td>
        </tr>
        <tr>
          <td><button class=ta @click="play_audio($event)">た<br>ta</button></td>
          <td><button class=chi @click="play_audio($event)">ち<br>chi</button></td>
          <td><button class=tsu @click="play_audio($event)">つ<br>tsu</button></td>
          <td><button class=te @click="play_audio($event)">て<br>te</button></td>
          <td><button class=to @click="play_audio($event)">と<br>to</button></td>
        </tr>
      </tbody>
    </table>
    <table class="gojyutable" v-if="openHtable3">
      <tbody>
          <tr>
          <td><button class=na @click="play_audio($event)">な<br>na</button></td>
          <td><button class=ni @click="play_audio($event)">に<br>ni</button></td>
          <td><button class=nu @click="play_audio($event)">ぬ<br>nu</button></td>
          <td><button class=ne @click="play_audio($event)">ね<br>ne</button></td>
          <td><button class=no @click="play_audio($event)">の<br>no</button></td>
        </tr>
        <tr>
          <td><button class=ha @click="play_audio($event)">は<br>ha</button></td>
          <td><button class=hi @click="play_audio($event)">ひ<br>hi</button></td>
          <td><button class=hu @click="play_audio($event)">ふ<br>hu</button></td>
          <td><button class=he @click="play_audio($event)">へ<br>he</button></td>
          <td><button class=ho @click="play_audio($event)">ほ<br>ho</button></td>
        </tr>
      </tbody>
    </table>
    <table class="gojyutable" v-if="openHtable4">
      <tbody>
          <tr>
          <td><button class=ma @click="play_audio($event)">ま<br>ma</button></td>
          <td><button class=mi @click="play_audio($event)">み<br>mi</button></td>
          <td><button class=mu @click="play_audio($event)">む<br>mu</button></td>
          <td><button class=me @click="play_audio($event)">め<br>me</button></td>
          <td><button class=mo @click="play_audio($event)">も<br>mo</button></td>
        </tr>
        <tr>
          <td><button class=ya @click="play_audio($event)">や<br>ya</button></td>
          <td></td>
          <td><button class=yu @click="play_audio($event)">ゆ<br>yu</button></td>
          <td></td>
          <td><button class=yo @click="play_audio($event)">よ<br>yo</button></td>
        </tr>
      </tbody>
    </table>
    <table class="gojyutable" v-if="openHtable5">
      <tbody>
          <tr>
          <td><button class=ra @click="play_audio($event)">ら<br>ra</button></td>
          <td><button class=ri @click="play_audio($event)">り<br>ri</button></td>
          <td><button class=ru @click="play_audio($event)">る<br>ru</button></td>
          <td><button class=re @click="play_audio($event)">れ<br>re</button></td>
          <td><button class=ro @click="play_audio($event)">ろ<br>ro</button></td>
        </tr>
        <tr>
          <td><button class=wa @click="play_audio($event)">わ<br>wa</button></td>
          <td></td>
          <td><button class=o @click="play_audio($event)">を<br>wo</button></td>
          <td></td>
          <td><button class=n @click="play_audio($event)">ん<br>n</button></td>
        </tr>
      </tbody>
    </table>
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
    <table class="gojyutable" v-if="openKtable1">
      <tbody>
        <tr>
          <td><button class=a @click="play_audio($event)">ア<br>a</button></td>
          <td><button class=i @click="play_audio($event)">イ<br>i</button></td>
          <td><button class=u @click="play_audio($event)">ウ<br>u</button></td>
          <td><button class=e @click="play_audio($event)">エ<br>e</button></td>
          <td><button class=o @click="play_audio($event)">オ<br>o</button></td>
        </tr>
        <tr>
          <td><button class=ka @click="play_audio($event)">カ<br>ka</button></td>
          <td><button class=ki @click="play_audio($event)">キ<br>ki</button></td>
          <td><button class=ku @click="play_audio($event)">ク<br>ku</button></td>
          <td><button class=ke @click="play_audio($event)">ケ<br>ke</button></td>
          <td><button class=ko @click="play_audio($event)">コ<br>ko</button></td>
        </tr>
      </tbody>
    </table>
    <table class="gojyutable" v-if="openKtable2">
      <tbody>
        <tr>
          <td><button class=sa @click="play_audio($event)">サ<br>sa</button></td>
          <td><button class=shi @click="play_audio($event)">シ<br>shi</button></td>
          <td><button class=su @click="play_audio($event)">ス<br>su</button></td>
          <td><button class=se @click="play_audio($event)">セ<br>se</button></td>
          <td><button class=so @click="play_audio($event)">ソ<br>so</button></td>
        </tr>
        <tr>
          <td><button class=ta @click="play_audio($event)">タ<br>ta</button></td>
          <td><button class=chi @click="play_audio($event)">チ<br>chi</button></td>
          <td><button class=tsu @click="play_audio($event)">ツ<br>tsu</button></td>
          <td><button class=te @click="play_audio($event)">テ<br>te</button></td>
          <td><button class=to @click="play_audio($event)">ト<br>to</button></td>
        </tr>
      </tbody>
    </table>
    <table class="gojyutable" v-if="openKtable3">
      <tbody>
        <tr>
          <td><button class=na @click="play_audio($event)">ナ<br>na</button></td>
          <td><button class=ni @click="play_audio($event)">ニ<br>ni</button></td>
          <td><button class=nu @click="play_audio($event)">ヌ<br>nu</button></td>
          <td><button class=ne @click="play_audio($event)">ネ<br>ne</button></td>
          <td><button class=no @click="play_audio($event)">ノ<br>no</button></td>
        </tr>
        <tr>
          <td><button class=ha @click="play_audio($event)">ハ<br>ha</button></td>
          <td><button class=hi @click="play_audio($event)">ヒ<br>hi</button></td>
          <td><button class=hu @click="play_audio($event)">フ<br>hu</button></td>
          <td><button class=he @click="play_audio($event)">ヘ<br>he</button></td>
          <td><button class=ho @click="play_audio($event)">ホ<br>ho</button></td>
        </tr>
      </tbody>
    </table>
    <table class="gojyutable" v-if="openKtable4">
      <tbody>
        <tr>
          <td><button class=ma @click="play_audio($event)">マ<br>ma</button></td>
          <td><button class=mi @click="play_audio($event)">ミ<br>mi</button></td>
          <td><button class=mu @click="play_audio($event)">ム<br>mu</button></td>
          <td><button class=me @click="play_audio($event)">メ<br>me</button></td>
          <td><button class=mo @click="play_audio($event)">モ<br>mo</button></td>
        </tr>
        <tr>
          <td><button class=ya @click="play_audio($event)">ヤ<br>ya</button></td>
          <td></td>
          <td><button class=yu @click="play_audio($event)">ユ<br>yu</button></td>
          <td></td>
          <td><button class=yo @click="play_audio($event)">ヨ<br>yo</button></td>
        </tr>
      </tbody>
    </table>
    <table class="gojyutable" v-if="openKtable5">
      <tbody>
        <tr>
          <td><button class=ra @click="play_audio($event)">ラ<br>ra</button></td>
          <td><button class=ri @click="play_audio($event)">リ<br>ri</button></td>
          <td><button class=ru @click="play_audio($event)">ル<br>ru</button></td>
          <td><button class=re @click="play_audio($event)">レ<br>re</button></td>
          <td><button class=ro @click="play_audio($event)">ロ<br>ro</button></td>
        </tr>
        <tr>
          <td><button class=wa @click="play_audio($event)">ワ<br>wa</button></td>
          <td></td>
          <td><button class=o @click="play_audio($event)">ヲ<br>wo</button></td>
          <td></td>
          <td><button class=n @click="play_audio($event)">ン<br>n</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
    props: ["isHstg2"],
    data(){
      return{
        openPageH: true,
        openPageK: false,
        openHtable1: false,
        openHtable2: false,
        openHtable3: false,
        openHtable4: false,
        openHtable5: false,
        openKtable1: false,
        openKtable2: false,
        openKtable3: false,
        openKtable4: false,
        openKtable5: false,
        step : 1,
        /* Hstg2: this.isHstg2, */
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
        this.openHtable1 = false
        this.openHtable2 = false
        this.openHtable3 = false
        this.openHtable4 = false
        this.openHtable5 = false
        this.openKtable1 = false
        this.openKtable2 = false
        this.openKtable3 = false
        this.openKtable4 = false
        this.openKtable5 = false 
        this.$refs.kTab.classList.remove("nowtab")
        this.$refs.hTab.classList.add("nowtab")
      },
      toggleK(){
        this.openPageK = true
        this.openPageH = false
        this.openHtable1 = false
        this.openHtable2 = false
        this.openHtable3 = false
        this.openHtable4 = false
        this.openHtable5 = false
        this.openKtable1 = false
        this.openKtable2 = false
        this.openKtable3 = false
        this.openKtable4 = false
        this.openKtable5 = false
        this.$refs.hTab.classList.remove("nowtab")
        this.$refs.kTab.classList.add("nowtab")
      },
      toggleHT1(){
        this.openPageH = false
        this.openHtable1 = true
      },
      toggleHT2(){
        this.openPageH = false
        this.openHtable2 = true
      },
      toggleHT3(){
        this.openPageH = false
        this.openHtable3 = true
      },
      toggleHT4(){
        this.openPageH = false
        this.openHtable4 = true
      },
      toggleHT5(){
        this.openPageH = false
        this.openHtable5 = true
      },
      toggleKT1(){
        this.openPageK = false
        this.openKtable1 = true
      },
      toggleKT2(){
        this.openPageK = false
        this.openKtable2 = true
      },
      toggleKT3(){
        this.openPageK = false
        this.openKtable3 = true
      },
      toggleKT4(){
        this.openPageK = false
        this.openKtable4 = true
      },
      toggleKT5(){
        this.openPageK = false
        this.openKtable5 = true
      },
      play_audio(event){
        var audio = new Audio(require("../assets/gojyuon_mp3/"+event.target.className+".mp3"))
        audio.play()
      },
      checkStage(){
        if(localStorage.getItem('isHstg2') === 'on'){this.Hstg2 = true;}
        if(localStorage.getItem('isHstg3') === 'on'){this.Hstg3 = true;}
        if(localStorage.getItem('isHstg4') === 'on'){this.Hstg4 = true;}
        if(localStorage.getItem('isHstg5') === 'on'){this.Hstg5 = true;}
        if(localStorage.getItem('isKstg2') === 'on'){this.Kstg2 = true;}
        if(localStorage.getItem('isKstg3') === 'on'){this.Kstg3 = true;}
        if(localStorage.getItem('isKstg4') === 'on'){this.Kstg4 = true;}
        if(localStorage.getItem('isKstg5') === 'on'){this.Kstg5 = true;}
      }
    },
    mounted(){
      this.checkStage()
    }
}
</script>

<style>
.sub-title{
  text-align: center;
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

.gojyutable{
  border:1px solid #000;
  width:90%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  font-size: 8px;
}

.gojyutable td{
  text-align: center;
  border:1px solid #000;
  padding: 2px;
}

.gojyutable td button{
  font-size: 30px;
  border: none;
  padding: 0px;
  width: 100%;
  background-color: #FFF;
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
</style>