<template>
  <div class="bo">
    <div class="container bot form-group">
      <div class="card-body justify-content-between d-flex  flex-sm-column flex-md-row flex-xl-row">
        <h3 class="title ">
          <i class="bi bi-image"></i>
          <span class="ass">ข่าวทั้งหมด</span>
        
        </h3>
          <span class="d-flex">
          <form >
            <input
              class="form-control me-2"
              type="search"
              placeholder="ค้นหา"
              aria-label="Search"
              v-model="textInput"
              
            />
          
          </form>
            <button class="btn btn-outline-success" type="submit" v-on:click="searchTtext">
              ค้นหา
            </button>
          </span>
      </div>
      <hr />
      <div class="container-fluid" v-if="dataResource.length!==0">
        <div class="row">
          <div
            class="col-md-4"
            v-for="item in dataResource"
            :key="item.id"
            style="padding: 10px"
          >
            <div class="card card-shadow" style="min-height: 22.5rem">
              <img
                v-bind:src="item.image"
                class="d-inline-block align-top img-responsive"
                alt="Kitten"
                style="height: 235px"
              />
              <div class="p-3">
                <h5 class="font-medium m-t-20">
                  <router-link
                    :to="{
                      path: '/Nc/',
                      name: 'Ndetail',
                      params: { newsID: item.id },
                    }"
                  >
                   {{ item.topic.substring(0, 70) + "..." }}</router-link
                  >
                </h5>

                <div
               
                  style="
                    font-size: 15px;
                    position: absolute;
                    bottom: 0;
                    margin-left: 80%;
                    padding: 10px;
                  "
                >
                  <span class="d-flex"><i class="bi bi-eye-fill"></i><span>{{ item.view }}</span></span>
                </div>
                <div
                  style="
                    font-size: 15px;
                    position: absolute;
                    bottom: 0;
                    padding-left: 1px;
                    padding-bottom: 10px;
                  "
                >
                  <span> {{ item.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="dataResource.length===0" class="container text-center" style="background-color:#f4f4f4;padding:6%">ไม่พบข้อมูล</div>
      <hr />
      <div class="d-flex justify-content-end">
        <b-pagination
          pills
          @change="eventPagi"
          v-model="page"
          :total-rows="total"
          :per-page="limit"
          prev-text="ก่อนหน้า"
          next-text="ถัดไป"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import APIService from "../../../services/news-services.js";
const api = new APIService();
export default {
  data: function () {
    return {
      dataResource: [],
      total: 0,
      limit: 6,
      page: 1,
      textInput:"",
      data1: "",
      
    };
  },
  name: "Navber",
  components: {},
  methods: {
    eventPagi: function (currentPage) {
      this.page = currentPage;
      this.search();
    },
  
    search: function () {
      const body = "?search&limit=" + this.limit + "&page=" + this.page;
      api.getNews(body).then((response) => {
        this.total = response.data.total;
        this.limit = response.data.perpage;
        this.page = response.data.page;
        this.dataResource = response.data.data;
      });
    },
    searchTtext: function () {
      const body = "?search="+this.textInput;
    console.log(body);
      api.getNewsBySearchText(body).then((response) => {
        this.total = response.data.total;
        this.limit = response.data.perpage;
        this.page = response.data.page;
        this.dataResource = response.data.data;
      this.textInput=''
      });
    },
  },
  mounted: function () {
    this.search();
  },
};
</script>

<style>
.page-item.active .page-link {
  background-color: rgb(86, 14, 123) !important;
  border-color: rgb(86, 14, 123) !important;
}
.one {
  background-image: url(https://ict.up.ac.th/coop/images/ability_test/WP_20140618_004.jpg);
}
.bo {
  margin-bottom: 50px;
  margin-top: 80px;
}
</style>
