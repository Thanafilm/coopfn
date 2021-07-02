<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
      
        v-for="(item, index) in dataResource"
        :key="index"
        data-target="#carouselExampleIndicators"
        :data-slide-to="index"
        :class='index === 0 ? "active" : ""'
      ></li>
    </ol>
    <div class="carousel-inner">
      <div
        v-for="(item, index) in dataResource"
        :key="index"
        :class='index === 0 ? "carousel-item active" :"carousel-item"'
      >
      <a :href="item.url" target="_blank">
        <img
          class="d-block w-100 "
          animation="spin-pulse" 
          :src="item.image"
          :alt="item.image"
        />
      </a>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    <div class="v">.</div>
  </div>
</template>

<script>
import APIService from "./../services/news-services";
const api = new APIService();
export default {
  name: "Banner",
  components: {},

  data: function () {
    return {
      dataResource: [],
    };
  },

  mounted: function () {
    api.getbanner().then((response) => {
      if (response.data.data) {
        console.log(response.data.data);
        this.dataResource = response.data.data;
      }
    });
  },
};
</script>

<style>
.v {
  height: 5px;
  background-color: #d9a327;
}
</style>
