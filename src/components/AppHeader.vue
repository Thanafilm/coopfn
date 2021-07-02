<template>
  <div
    class="test navbar-line "
    style="border-bottom-style: solid; border-bottom-color: rgb(86, 14, 123)"
  >
    <nav class="navbar header-2 ">
      <div class="pull-left d-flex justify-content-evenly  hide " >
        <a class="nav na1 " href="https://www.up.ac.th/th/">
          <i class="bi bi-geo-alt-fill"></i> มหาวิทยาลัยพะเยา
        </a>
        <a class="nav na2 pl-2" href="https://ict.up.ac.th/">
          <i class="bi bi-geo-alt-fill"></i>คณะเทคโนโลยีสารสนเทศและการสื่อสาร
        </a>
      </div>
      <div class="pull-right">
        <li class="list-inline-item ">
          <a href="https://web.facebook.com/coopictup"
            ><img class="mr-1" width="30px" src="../assets/facebook.png"
          /></a>
        </li>
        <li class="list-inline-item hide">
          <a href="https://www.youtube.com/embed/eWSuThvhcIc"
            ><img class="mr-1" width="30px" src="../assets/youtube.png"
          /></a>
        </li>

        <span class="btn btn-danger btn-sm mr-1" style="border-radius: 20px">
          <b-icon icon="telephone-forward-fill  " variant="white"></b-icon>
          Tel. 054 466 666 - 2319
        </span>

        <b-icon icon="clock" variant="white" class="hide"></b-icon>
        <span style="color:#ffff" class="hide"> 08:00-16:30 น</span>      
        </div>
    </nav>
    <Navber />
    <div class="header-row">.</div>
  </div >
</template>

<script >
import Navber from './Navber.vue';
export default {
  name: "AppHeader",
  components: {Navber},
 
    
};
</script>

<style>
  .header-row {
  background: rgb(86, 14, 123);
  color: rgba(255, 255, 255, 0.75);
}

.header-2 {
  background-color: rgb(86, 14, 123);
}

.test {
  position: fixed !important;
  z-index: 20;
  width: 100%;
}
a.ko {
  text-decoration: none !important;
  color: black !important;
}
a.nav {
  text-decoration: none !important;
  color: rgb(255, 255, 255) !important;
}
a.na1:hover {
  color: #d9a327 !important;
}
a.na2:hover {
  color: #d9a327 !important;
  margin-right: 10px;
}
@media only screen and (max-width: 768px) {
  .hide {
   
    display: none !important;
  }
   div.hide {
   
    display: none !important;
  }
}

</style>

