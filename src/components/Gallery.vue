<template>
  <div class="bo ">
    <div class="v container">.</div>
    <div class="container bot form-group">
      <div class="card-body text-left">
        <h3 class="title d-flex">
          <i class="bi bi-megaphone-fill"></i>
          <span class="ass">แกลอรี่</span>
          <div class="lo pl-2">|</div>
          <a href="/Aimg"
            ><span class="pl-2" style="font-size: 16px; color: #333">อัลบั้มทั้งหมด</span></a
          >
        </h3>
      </div>
      <div class="container-fluid ">
        <div class="row ">
          <div
            class="col-md-4 "
            v-for="item in dataResource"
            :key="item.id"
            style="padding: 10px"
          >
            <div
              class="card card-shadow shadow-sm  bg-body rounded"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              @click="callApiGallary(item.id)"
            >
              <img
                v-bind:src="item.cover"
                class="d-inline-block align-top "
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
        <div
          class="modal-dialog modal-dialog-centered modal-xl"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                <div><img class="mr-1" width=30px src="../assets/gallery1.png"><span class="pl-2" >แกลอรี่</span></div>
                {{ titleModal }}
                <small style="color: #7b3b95"
                  ><i class="fa fa-clock-o"></i>&nbsp;
                    {{date}}
                &nbsp;&nbsp;&nbsp;<i class="fa fa-eye">
                    </i
                  >{{ view }}</small
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
  </div>
</template>

<script>
import APIService from "./../services/news-services";
const api = new APIService();
export default {
  data: function () {
    return {
      dataResource: [],
      load: false,
      currentId: null,
      titleModal: "",
      date:"",
      view:"",
      gallary: [],
    };
  },
  name: "Navber",
  components: {},
  mounted: function () {
    api.getGallary().then((response) => {
      if (response.data.data) {
        this.dataResource = response.data.data;
        this.load = true;
      }
    });
  },

  methods: {
    callApiGallary: function (id) {
      api.getGallary(id).then((response) => {
        this.titleModal = response.data.data.galleryname;
        this.date=response.data.data.date
        this.view=response.data.data.date

      
        this.gallary = [];
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
  },
};
</script>

<style>
.one {
  background-image: url(https://ict.up.ac.th/coop/images/ability_test/WP_20140618_004.jpg);
}
.bo {
  margin-bottom: 50px;
  margin-top: 80px;
}
</style>
