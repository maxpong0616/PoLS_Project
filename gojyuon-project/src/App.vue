<template>
  <Topbanner/>
  <router-view 
    @closeNav="toggleNav" 
    @openStage="stageUpdate"
    v-bind:isHstg2="this.isHstg2"
  />
  <br><br><br><br><br>
  <Bottomnav v-if="navOn"/>
</template>

<script>
import M from 'materialize-css'
import Bottomnav from './views/tools/Bottom_nav'
import Topbanner from './views/tools/Top_banner'
export default {
  data(){
    return{
      navOn: true,
      isHstg2: false,
      isHstg3: false,
      isHstg4: false,
      isHstg5: false,
      isKstg2: false,
      isKstg3: false,
      isKstg4: false,
      isKstg5: false
    }
  },
  methods:{
    toggleNav(){
      this.navOn = !this.navOn
    },
    stageUpdate(stgnum){
      this['isHstg'+stgnum] = true
      console.log(stgnum)
    }
  },
  components:{
      Bottomnav,
      Topbanner
  },
  mounted () {
    M.AutoInit()
  },  
}
</script>
<style>

</style>
