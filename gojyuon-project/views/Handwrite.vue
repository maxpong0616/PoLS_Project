<template>
  <h3 class="sub-title">手寫練習</h3>
    <table class="gojyutable" id="handwriteTable" v-if="handwriteTable">
      <tbody>
        <tr>
          <td><button class=a @click="openPad($event)">あ<br>a</button></td>
          <td><button class=i @click="openPad($event)">い<br>i</button></td>
          <td><button class=u @click="openPad($event)">う<br>u</button></td>
          <td><button class=e @click="openPad($event)">え<br>e</button></td>
          <td><button class=o @click="openPad($event)">お<br>o</button></td>
        </tr>
      </tbody>
    </table>
    <div><button id="closePad" v-if="padContainer" @click="closePad">X</button></div>
    <Pad ref="pad" v-if="padContainer"/>
    
    
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
        openPad(event){
            var url = "./hw_kanas/"+event.target.className+".png"
            console.log('url('+ url +')')
            this.handwriteTable = false
            this.padContainer = true
            
            setTimeout(function(){
              const padBG = document.getElementById('drawing-area');
              padBG.style.backgroundImage = 'url('+ url +')'
              padBG.style.backgroundSize = 'cover'
              padBG.style.backgroundRepeat = 'no-repeat'
            }, 50); 
            document.body.style.overflow = 'hidden';
            /* document.body.style.position = 'fixed'; */
            /* document.getElementById("drawing-area").style.position = 'fixed'; */
            
        },
        closePad(){
            document.body.style.overflow = '';
            /* document.body.style.position = ''; */
            /* document.getElementById("drawing-area").style.position = ''; */
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
  background-image: none;
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
  margin-right: 0;
  float: right;
  z-index: 10;
}
</style>