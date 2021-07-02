<template>
  <div>
    <div class="container-fluid form-group lacolor">
      <div class="card-body text-left newslayer">
        <h3 class="title d-flex bot">
          <b-icon
            icon="star-half"
            animation="throb"
            variant="danger"
            font-scale="1"
          ></b-icon>
          <span class="ass">ข่าวประชาสัมพันธ์</span>

          <div class="lo pl-2">|</div>
          <a href="/Anew"
            ><span class="pl-2" style="font-size: 20px; color: #333"
              >ประกาศทั้งหมด</span
            ></a
          >
        </h3>
      </div>

      <VueSlickCarousel
        :arrows="true"
        :dots="true"
        v-bind="settings"
        v-if="!load"
        class="newslayer"
      >
        <b-card
          v-for="item of dataResource"
          :key="item.id"
          :img-src="item.image"
          img-alt="123"
          img-top
          style="max-width: 15rem"
          class="mb-2 text-left shadow-sm bg-body rounded img-responsive"
        >
          <router-link
            :to="{ path: '/Nc/', name: 'Ndetail', params: { newsID: item.id } }"
          >
            <b-card-text class="text-left btc">
              <h5>{{ item.topic.substring(0, 70) + "..." }}</h5>
            </b-card-text>
          </router-link>

          <b-card-text class="d-flex justify-content-between">
            <span>{{ item.date }}</span>
            <span><i class="bi bi-eye-fill"></i>{{ item.view }}</span>
          </b-card-text>
        </b-card>
      </VueSlickCarousel>
    </div>

    <div class="row" style="margin-top: 50px">
      <div class="col-md-7" style="padding-left: 15%">
        <b-col md="4" class="mb-2 d-flex">
          <b-icon
            icon="slack"
            animation="fade"
            variant="danger"
            font-scale="2"
          ></b-icon>
          <h3 class="pl-2">ข่าวอื่น ๆ</h3>
        </b-col>
        <div style="margin-top: 30px">
          <div>
            <p
              v-for="(item, index) in dataResource_list"
              :key="index"
              style="
                padding-bottom: 7px;
                border-bottom-style: dotted;
                border-bottom-width: thin;
                border-bottom-color: #7b3b95;
              "
            >
              <router-link
                style="padding-bottom: 3px; color: #363d40"
                :to="{
                  path: '/Nc/',
                  name: 'Ndetail',
                  params: { newsID: item.id },
                }"
              >
                <h5>
                  <i class="fa fa-angle-double-right"></i> {{ item.topic }}
                </h5>

                <small style="color: #7b3b95"
                  ><i class="fa fa-clock-o"></i>&nbsp;{{
                    item.date
                  }}&nbsp;&nbsp;&nbsp;<i class="fa fa-eye"> </i
                  >{{ item.view }}</small
                >
              </router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-5" style="padding-left: 5%">
        <b-col md="4" class="mb-2 d-flex">
          <b-icon
            icon="slack"
            animation="fade"
            variant="danger"
            font-scale="2"
          ></b-icon>
          <h3 class="pl-2">PAGE ICT COOP</h3>
        </b-col>
        <div
          class="fb-page fb_iframe_widget"
          data-href="https://web.facebook.com/coopictup/"
          data-tabs="timeline"
          data-width="500"
          data-height="750"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
          fb-xfbml-state="rendered"
          fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=763&amp;height=750&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FWeLoveICTUP%2F&amp;locale=th_TH&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width=500"
        >
          <span style="vertical-align: bottom; max-width: 500px; max-height: 750px"
            ><iframe
              name="f2ff3a71ada00f8"
              
  
              data-testid="fb:page Facebook Social Plugin"
              title="fb:page Facebook Social Plugin"
              frameborder="0"
              allowtransparency="true"
              allowfullscreen="true"
              scrolling="no"
              allow="encrypted-media"
              src="https://www.facebook.com/plugins/like_box.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfef7af8cc8fdc%26domain%3Dict.up.ac.th%26origin%3Dhttps%253A%252F%252Fict.up.ac.th%252Ff1cefa251e4db34%26relation%3Dparent.parent&amp;container_width=250&amp;header=true&amp;href=https%3A%2F%2Fwww.facebook.com%2Fpages%2Fcoopictup%2F577523859033235&amp;locale=en_US&amp;sdk=joey&amp;show_faces=true&amp;stream=true&amp;width=500px"
             class="st-iframe"
           
            ></iframe
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import APIService from "./../services/news-services";

const api = new APIService();
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "News",
  components: { VueSlickCarousel },
  data: function () {
    return {
      dataResource: [],
      dataResource_list: [],

      load: true,
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 4,
        touchThreshold: 5,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },

  mounted: function () {
    const body = "?search&limit=6" + "&page=1";
    const body_list = "?search&limit=6" + "&page=2";
    api.getNews(body).then((response) => {
      //console.log(response.data.data);
      if (response.data.data) {
        this.dataResource = response.data.data;
        this.load = false;
      }
    });
    api.getNews(body_list).then((response) => {
      console.log(response.data.data);
      if (response.data.data) {
        this.dataResource_list = response.data.data;
      }
    });
  },
};
</script>

<style>
.slick-list {
  margin: 0 -5px;
}
.slick-slide > div {
  padding: 0 10px;
  color: #000;
}

.card-img-top {
  height: 15rem;
  object-fit: cover;
}
.st-iframe{

                border: none;
                visibility: visible;
                width: 500px;
                height: 560px;
              
}
@media screen and (max-width:600px) {
  .st-iframe{
    width: 300px;
  }
}
.st {
  padding-bottom: 7px;
  padding-top: 7px;
  border-bottom-style: dotted;
  border-bottom-width: thin;
  border-bottom-color: #7b3b95;
  text-align: left;
  margin-top: 5px;
}

.bot {
  margin-top: 30px;
}
.ass {
  margin-left: 10px;
}
.stc {
}
.btc {
  height: 50px;
  overflow: hidden;
  text-overflow: clip;
}

.newslayer {
  margin-left: 5%;
  margin-right: 5%;
}
.lacolor {
  background-color: azure;
}
</style>
