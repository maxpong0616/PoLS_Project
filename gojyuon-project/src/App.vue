<template>
  <Topbanner/>
  <router-view 
    @closeNav="toggleNav" 
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
      dataInititated: false,
    }
  },
  methods:{
    toggleNav(){
      this.navOn = !this.navOn
    },
    setStage(){
      if(localStorage.getItem('dataInititated') === null){
        localStorage.setItem('isHstg2', 'off');
        localStorage.setItem('isHstg3', 'off');
        localStorage.setItem('isHstg4', 'off');
        localStorage.setItem('isHstg5', 'off');
        localStorage.setItem('isKstg2', 'off');
        localStorage.setItem('isKstg3', 'off');
        localStorage.setItem('isKstg4', 'off');
        localStorage.setItem('isKstg5', 'off');
        localStorage.setItem('dataInititated', 'true');
        console.log(localStorage.getItem('dataInititated'))
      }

    }
  },
  components:{
      Bottomnav,
      Topbanner
  },
  mounted () {
    M.AutoInit()
  },
  created(){
    this.setStage()
  }
}
</script>
<style>

</style>
