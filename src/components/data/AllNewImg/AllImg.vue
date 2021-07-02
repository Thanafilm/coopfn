<template>
  <div class="bo" style="margin-top:100px">
    <div class="container bot form-group">
      <div class="card-body text-left">
        <h3 class="title d-flex">
          <i class="bi bi-image"></i>
          <span class="ass">แกลอรี่ทั้งหมด</span>
        </h3>

        <hr />
      </div>

      <div class="container-fluid">
        <div class="row">
          <div
            class="col-md-4"
            v-for="item in dataResource"
            :key="item.id"
            style="padding: 10px"
          >
            <div
              class="card card-shadow"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              @click="callApiGallary(item.id)"
            >
              <img
                v-bind:src="item.cover"
                class="d-inline-block align-top"
                alt="Kitten"
                style="height: 235px"
              />
              <div class="p-3">
                <h5 class="font-medium m-t-20 text-left">
                  <a class="link">
                    {{ item.galleryname.substring(0, 70) + "..." }}</a
                  >
                </h5>
                <div>{{ item.date }}</div>
                <div style="font-size: 12px" class="text-right">
                  <span> {{ item.created_at }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              <div>
                <img
                  class="mr-1"
                  width="30px"
                  src="../../../assets/gallery1.png"
                /><span class="pl-2">แกลอรี่</span>
              </div>
              {{ titleModal }}
              <small style="color: #7b3b95"
                ><i class="fa fa-clock-o"></i>&nbsp; {{ date }}</small
              >
            </h5>

            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <span class="text-center">
              <lingallery
                :iid.sync="currentId"
                :width="1140"
                :height="600"
                :items="gallary"
                v-if="gallary.length !== 0"
              />
            </span>
          </div>
        </div>
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
      titleModal: "",
      gallary: [],
      dataResource: [],
      total: 0,
      limit: 6,
      page: 1,
      date: "",
    };
  },
  name: "Navber",
  components: {},
  methods: {
    eventPagi: function (currentPage) {
      this.page = currentPage;
      this.search();
    },
    callApiGallary: function (id) {
      api.getGallary(id).then((response) => {
        this.titleModal = response.data.data.galleryname;
        this.gallary = [];
        this.date = response.data.data.date;

        console.log(response.data.data.image);
        response.data.data.image.map((item, index) => {
          this.gallary.push({
            id: index,
            src: item.image,
            thumbnail: item.image,
          });
        });
      });
    },
    search: function () {
      const body = "?search&limit=" + this.limit + "&page=" + this.page;
      api.getGallary(body).then((response) => {
        console.log(response.data);
        this.total = response.data.total;
        this.limit = response.data.perpage;
        this.page = response.data.page;
        this.dataResource = response.data.data;
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
