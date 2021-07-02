<template>
  <div id="app">
  <div class="nav"> <app-header /></div>
    <div class="main"> <router-view /></div> 
    

    <Footer/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import Footer from './components/Footer.vue'


export default {
  components:{
    AppHeader,
    Footer,

    
  }
}
</script>


<style>
@font-face {
  font-family: "Athiti";
  src: url(../src/assets/font/Athiti-Medium.ttf);
}

#app {
  font-family: "Athiti" ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}



.main{

  margin-top:165px;
  z-index: -1;
}
</style>
