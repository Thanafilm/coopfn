<template>
  <div>
    <div class="bgc" style="padding-bottom: 50px">
      <b-card-text
        class="container card"
        style="margin-top: 15px; min-width: 1040px"
      >
        <div> 
          <div style="margin-top:40px">
          <h2>
            <span class="ass">กำหนดการสหกิจศึกษา</span>
            <small style="color: #7b3b95"
          ><i class="fa fa-clock-o pl-3"></i>&nbsp;{{dataResource.created_at }}</small
        >
          </h2>
        </div> 
        <hr/>
          <div
            class="text-left"
            v-html="dataResource.schedule"
            style="margin: 50px"
          ></div>
        </div>
      </b-card-text>
    </div>
  </div>
</template>

<script>
import APIService from "../../../services/news-services";
const api = new APIService();
export default {
  name: "schedulec",
  components: {},
  data: function () {
    return {
      dataResource: [],
    };
  },

  mounted: function () {
    api.getschedulec().then((response) => {
      if (response.data.data) {
        console.log(response.data.data);
        this.dataResource = response.data.data;
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