<template>
  <div class="detail1" style="padding-bottom: 100px">
    <div class="y">.</div>
    <div class="container card" style="margin-top: 15px; min-width: 1040px">
      <span class="mt-5">
        <div>
          <h2>
            <img width="50px" src="../../assets/news2.png" />
            <span class="ass">ข่าวประชาสัfdsfมพันธ์</span>
          </h2>
        </div>
       
        <h3>
          <img width="50px" src="../../assets/news3.png" />
          {{ dataResource.topic }}
        
        </h3>

        <small style="color: #7b3b95"
          ><i class="fa fa-clock-o"></i>&nbsp;
          {{dataResource.date}}&nbsp;&nbsp;&nbsp;<i class="fa fa-eye"> </i
          > {{ dataResource.view }} <a>ข่าวโดย</a> {{dataResource.writer}}</small
        >
  
        <span class="">{{ dataResource.create }}</span>
      </span>
      <hr />
       <div class="text-center pb-5 " v-if="dataResource.image">
          <img width="70%" :src=" dataResource.image"  alt="image-toppic" class="img-responsive">
        </div>
      <div v-html="dataResource.desc"></div>
      <hr />
      
      <div
        class="card text-center"
        style="
          padding: 8px;
          margin: 15px;
          background-color: rgba(199, 199, 199, 0.397);
        "
        v-if="gallary.length !== 0"
      >
        <lingallery
          :iid.sync="currentId"
          :width="1140"
          :height="600"
          :items="gallary"
          v-if="gallary.length !== 0"
        />
      </div>
    </div>
  </div>
</template>

<script>
import APIService from "./../../services/news-services";

const api = new APIService();
export default {
  name: "Ndetail",
  components: {},
  data: function () {
    return {
      dataResource: [],
      load: false,
      gallary: [],
    };
  },
  mounted: function () {
    api.getNewsId(this.$route.params.newsID).then((response) => {
      console.log(response.data.data);
      if (response.data.data) {
        this.dataResource = response.data.data;
        this.load = true;
        response.data.data.gallery.map((item, index) => {
          this.gallary.push({
            id: index,
            src: item.image,
            thumbnail: item.image,
          });
        });
      }
    });
  },
};
</script>

<style>
.detail1 {
  min-height: 700px;
  background-color: rgb(235, 235, 235);
}
.y {
  background-color: rgba(199, 199, 199, 0.397);
}
</style>
