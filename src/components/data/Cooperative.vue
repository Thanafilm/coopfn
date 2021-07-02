<template>
  <div>
    <div class="bgc" style="padding-bottom: 50px">
      
      <b-card-text
        class="container card"
        style="margin-top: 15px; min-width: 1040px"
      >
        <div>
          <div class="d-flex justify-content-center">
            <iframe
              class="iframe"
              src="https://onedrive.live.com/embed?cid=AE26E929085E4B7E&amp;resid=AE26E929085E4B7E%21871&amp;authkey=AIyCt6rJDf6KTDU&amp;em=2"
              width="600"
              height="400"
              frameborder="0"
              scrolling="no"
              margin-top="50px"
            ></iframe>
          </div>
          <div
            class="text-left"
            v-html="dataResource.detail"
            style="margin: 50px"
          ></div>
        </div>
      </b-card-text>
    </div>
  </div>
</template>

<script>
import APIService from "../../services/news-services";
const api = new APIService();
export default {
  name: "Cooperative",
  components: {},
  data: function () {
    return {
      dataResource: [],
    };
  },

  mounted: function () {
    api.getcoopdetail().then((response) => {
      if (response.data.data) {
        console.log(response.data);
        this.dataResource = response.data.data[0];
      }
    });
  },
};
</script>



<style>

#featured {
  margin-bottom: 2em;
  overflow: hidden;
  width: 1050px;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
}

.iframe {
  margin-top: 41px;
}
.bgc {
  background-color: rgb(231, 231, 231);
}
</style>
