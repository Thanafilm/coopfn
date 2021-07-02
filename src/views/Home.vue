<template>
  <div class="home container-fuild">
    <Banner msg="Welcome to Your Vue.js App"/>
    <News/>
    <Gallery />
    <Video />
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
    
   
  }
}
</script>
