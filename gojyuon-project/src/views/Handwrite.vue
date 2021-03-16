<template>
  <h3 class="sub-title">手寫練習</h3>
    <table class="gojyutable" id="handwriteTable" v-if="handwriteTable">
      <tbody>
        <tr>
          <td><button class=a @click="openPad">あ<br>a</button></td>
          <td><button class=i @click="openPad">い<br>i</button></td>
          <td><button class=u @click="openPad">う<br>u</button></td>
          <td><button class=e @click="openPad">え<br>e</button></td>
          <td><button class=o @click="openPad">お<br>o</button></td>
        </tr>
      </tbody>
    </table>
    <Pad ref="pad" v-if="padContainer"/>
    <div><button id="closePad" v-if="padContainer" @click="closePad">X</button></div>
    
</template>

<script>
import Pad from './tools/Pad'
export default {
    components:{
        Pad
    },
    data(){
        return{
            handwriteTable : true,
            padContainer : false
        }
    },
    methods:{
        openPad(){
            this.handwriteTable = false
            this.padContainer = true
        },
        closePad(){
            this.handwriteTable = true
            this.padContainer = false
            this.$refs.pad.clearCanvas();
        }
    },

}

</script>

<style>
.sub-title{
  text-align: center;
}

/*paint pad*/
.containerD {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.drawing-area {
  box-shadow: 0 0 6px 0 #999;
  background-image: url('https://i.imgur.com/PTM59o2.png');
}

.clear-button {
  margin: 2em;
  font-size: 16px;
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

#closePad{
  border: none;
  margin: 10px auto;
}
</style>