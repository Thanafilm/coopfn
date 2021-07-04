<template>
  <div class="home container-fuild" >
 <div class="v">.</div>
    <component  :is="compo[0].title"></component>
    <div class="v">.</div>
    <component  :is="compo[1].title"></component>
    <div class="v">.</div>
    <component  :is="compo[2].title"></component>
    <div class="v">.</div>
    <component  :is="compo[3].title"></component>

  

  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import News from '../components/News.vue'
import Gallery from '../components/Gallery.vue'
import Video from '../components/video.vue'
import Service from './../services/news-services'
const api = new  Service();
export default {
  name: 'Home',
  components: {
    Banner,
    News,
    Gallery,
    Video,
    
   
  },
  data:function(){
    return{

      compo:[{id:1,title:"Banner"},{id:2,title:"News"},{id:3,title:"Gallary"},{id:4,title:"Video"}]
    }
  },
  mounted:function(){
    api.getSection().then(res=>{
      this.compo=res.data||this.compo
      console.log(this.compo);
    })
  }

}
</script>
<style>
.v {
  height: 3px;
  background-color: #d9a327;
}
</style>
