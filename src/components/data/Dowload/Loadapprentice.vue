<template>
  <div class="detail card">
    <section class="bar bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="">
            <h3 class="mt-4 d-flex justify-content-center pr-2">
              แบบฟอร์มฝึกงาน
              <span class="pl-2" >
                
              <b-button  href="https://dev.coop.ict.up.ac.th/"  target="_blank" pill variant="danger"><b-icon  class="mr-1" icon="circle-fill" animation="throb" variant="light" font-scale="1">สมัครเลย</b-icon>สมัครเลย</b-button></span>
            </h3>
            
            </div>
            
            <ul
              id="pills-tab"
              role="tablist"
              class="nav nav-pills nav-justified"
            >
              <li class="nav-item">
                <a
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  class="nav-link active show"
                  >เอกสารฝึกงาน</a
                >
              </li>
              <li class="nav-item">
                <a
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  class="nav-link"
                  >สำหรับนิสิต</a
                >
              </li>
              <li class="nav-item">
                <a
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-ta"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  class="nav-link"
                  >สำหรับอาจาย์ฝึกงาน</a
                >
              </li>
              <li class="nav-item">
                <a
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-po"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  class="nav-link"
                  >สำหรับเจ้าหน้าที่</a
                >
              </li>
              <li class="nav-item">
                <a
                  id="pills-contact-tab"
                  data-toggle="pill"
                  href="#pills-contact"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                  class="nav-link"
                  >สำหรับสถานประกอบการ</a
                >
              </li>
            </ul>
            <div id="pills-tabContent" class="tab-content">
              <div
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                class="tab-pane fade active show"
              >
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th class="text-left">ชื่อฟอร์ม</th>
                        <th class="text-left">แก้ไขล่าสุด</th>
                        <th class="text-center">ดาวน์โหลด</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item,index) in dataResource1" :key="index">
                        <th scope="row">{{index+1}}</th>
                        <td>{{item.filename}}</td>
                         <td>{{item.date}}</td>
                        <td class="text-center">
                          <a :href="item.filepath" target="_blank"><b-icon icon="download" variant="secondary"></b-icon></a>
                        </td>
                       
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                class="tab-pane fade"
              >
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th class="text-left">ชื่อฟอร์ม</th>
                        <th class="text-left">แก้ไขล่าสุด</th>
                        <th class="text-center">ดาวน์โหลด</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item,index) in dataResource2" :key="index">
                        <th scope="row">{{index+1}}</th>
                        <td>{{item.filename}}</td>
                         <td>{{item.date}}</td>
                        <td class="text-center">
                          <a :href="item.filepath" target="_blank"><b-icon icon="download" variant="secondary"></b-icon></a>
                        </td>
                       
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                id="pills-ta"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                class="tab-pane fade"
              >
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th class="text-left">ชื่อฟอร์ม</th>
                        <th class="text-left">แก้ไขล่าสุด</th>
                        <th class="text-center">ดาวน์โหลด</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item,index) in dataResource3" :key="index">
                        <th scope="row">{{index+1}}</th>
                        <td>{{item.filename}}</td>
                         <td>{{item.date}}</td>
                        <td class="text-center">
                          <a :href="item.filepath" target="_blank"><b-icon icon="download" variant="secondary"></b-icon></a>
                        </td>
                       
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                id="pills-po"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                class="tab-pane fade"
              >
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th class="text-left">ชื่อฟอร์ม</th>
                        <th class="text-left">แก้ไขล่าสุด</th>
                        <th class="text-center">ดาวน์โหลด</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item,index) in dataResource4" :key="index">
                        <th scope="row">{{index+1}}</th>
                        <td>{{item.filename}}</td>
                         <td>{{item.date}}</td>
                        <td class="text-center">
                          <a :href="item.filepath" target="_blank"><b-icon icon="download" variant="secondary"></b-icon></a>
                        </td>
                       
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                class="tab-pane fade"
              >
                <div class="table-responsive">
                 <table class="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th class="text-left">ชื่อฟอร์ม</th>
                        <th class="text-left">แก้ไขล่าสุด</th>
                        <th class="text-center">ดาวน์โหลด</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item,index) in dataResource5" :key="index">
                        <th scope="row">{{index+1}}</th>
                        <td>{{item.filename}}</td>
                         <td>{{item.date}}</td>
                        <td class="text-center">
                          <a :href="item.filepath" target="_blank"><b-icon icon="download" variant="secondary"></b-icon></a>
                        </td>
                       
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import APIService from "../../../services/news-services";
const api = new APIService();
export default {
  data: function () {
    return {
      dataResource1: [],
      dataResource2: [],
      dataResource3: [],
      dataResource4: [],
      dataResource5: [],
      load: false,
    };
  },
  mounted: function () {
    api.getfile().then((response) => {
      if (response.data.data) {
        response.data.data.forEach((item) => {
          if (item["category_id"] === 2) {
            if (item["subcategory_id"] === 6) {
              this.dataResource1.push(item)
            }
            if (item["subcategory_id"] === 7) {
              this.dataResource2.push(item)
            }
            if (item["subcategory_id"] === 8) {
              this.dataResource3.push(item)
            }
            if (item["subcategory_id"] === 9) {
              this.dataResource4.push(item)
            }
            if (item["subcategory_id"] === 10) {
              this.dataResource5.push(item)
            }
          }
        });
       
      }
    }).then(()=>{
       this.load = true;
    });
  },
};
</script>

<style>
.nav-item > a {
  color: rgb(255, 255, 255);
}
.nav-item > a:hover {
  color: rgb(255, 255, 255);
}
.bg-white {
  background: #fff !important;
}
.bar {
  padding: 60px 0;
}
.nav-pills .nav-link.active {
  background: #fb8f30 !important;
}
.mt-4 {
  color: black;
}
.detail {
  min-height: 660px;
}

td {
  text-align: left;
}
</style>
