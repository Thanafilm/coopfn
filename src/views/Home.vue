<template>
  <div class="home container-fuild" >
 
    <component  :is="compo[0].title"></component>
    <component  :is="compo[1].title"></component>
    <component  :is="compo[2].title"></component>
    <component  :is="compo[3].title"></component>

  

  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import News from '../components/News.vue'
import Gallery from '../components/Gallery.vue'
import Video from '../components/video.vue'
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

      compo:[{id:1,title:"Video"},{id:2,title:"Banner"},{id:3,title:"News"},{id:4,title:"Gallary"}]
    }
  },
  mounted:function(){
    //api
  }

}
</script>
