<template>
  <section id="footer">
    <div class="container-fluid">
      <div class="row text-center text-xs-center text-sm-left text-md-left">
        <div class="col-xs-12 col-sm-3 col-md-3">
          <h5>คณะเทคโนโลยีสารสนเทศและการสื่อสาร</h5>
          <ul class="list-unstyled quick-links">
            <li>
              <a><i class="fa fa-angle-double-right"></i>Email: ict@up.ac.th</a>
            </li>
            <li>
              <a
                ><i class="fa fa-angle-double-right"></i>โทรศัพท์: 054 466 666
                ต่อ 2319</a
              >
            </li>
            <li>
              <a
                ><i class="fa fa-angle-double-right"></i>ที่อยู่:
                คณะเทคโนโลยีสารสนเทศและการสื่อสาร
                อาคารเทคโนโลยีสารสนเทศและการสื่อสาร 19 ม.2 ต.แม่กา อ.เมืองพะเยา
                จ.พะเยา มหาวิทยาลัยพะเยา</a
              >
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-3 col-md-3">
          <h5>เว็บไซต์ที่เกี่ยวข้อง(ภายใน)</h5>
          <ul class="list-unstyled quick-links">
            <li>
              <a href="https://www.up.ac.th/th/"
                ><i class="fa fa-angle-double-right"></i>มหาวิทยาลัยพะเยา</a
              >
            </li>
            <li>
              <a href=""
                ><i class="fa fa-angle-double-right"></i
                >สหกิจศึกษามหาวิทยาลัยพะเยา</a
              >
            </li>
          </ul>
        </div>

        <div class="col-xs-12 col-sm-3 col-md-3">
          <h5>เว็บไซต์ที่เกี่ยวข้อง(ภายนอก)</h5>
          <ul class="list-unstyled quick-links">
            <li>
              <a
                href="https://web.facebook.com/coop.up.ac.th/?__xts__=68.arcwnemvpilazafrdsw5o5mjgm1kyx6fhlm9oihyimytpr8r2hxcngvjdiykr1cdbof71adpp6lnmuewzwajfkz55swhnqkvxosgpbrhu3xbafj6bsam2fxpo3mjn84qcm1zvcxtpt8uqc40tmxpt3vcxdudivsut6bjvebwpnls8vmcl2mqeq&_rdc=1&_rdr"
                ><i class="fa fa-angle-double-right"></i>สหกิจศึกษา
                สำนักงานคณะกรรมการการอุดมศึกษา</a
              >
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-3 col-md-3">
          <h5>ระบบสารสนเทศ</h5>
          <ul class="list-unstyled quick-links">
            <li>
              <a href="https://dev.coop.ict.up.ac.th/"
                ><i class="fa fa-angle-double-right"></i
                >บริหารจัดการสหกิจศึกษามหาลัยพะเยา</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="footerb">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul class=" text-center">
              <li class="list-inline-item " >
                <a  href="https://web.facebook.com/coopictup"
                  ><img width=50px src="../assets/facebook.png"></a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.youtube.com/embed/eWSuThvhcIc"
                  ><img width=50px src="../assets/youtube.png"></a>
              </li>
              
              <li class="list-inline-item">
                <a href="" target="_blank">
                  <img width=50px src="../assets/email.png"></a>
              </li>
            </ul>
          </div>
          <hr />
        </div>

        <div class="row">
          <div
            class="
              col-xs-12 col-sm-12 col-md-12
              mt-2 mt-sm-2
              text-center text-white
            "
          >
            <p class="h6">
              © 2021 Cooperative Education Project School of Information and
              Communication Technology Phayao University
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
section {
  padding: 60px 0;
}

section .section-title {
  text-align: center;
  color: #007b5e;
  margin-bottom: 50px;
  text-transform: uppercase;
}
#footer {
  background: rgb(86, 14, 123) !important;
  padding-left: 15%;
  padding-right: 5%;
}
.footerb {
  padding-right: 18%;
}
#footer h5 {
  padding-left: 10px;
  border-left: 3px solid #eeeeee;
  padding-bottom: 6px;
  margin-bottom: 20px;
  color: #ffffff;
}
#footer a {
  color: #ffffff;
  text-decoration: none !important;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
#footer ul.social li {
  padding: 3px 0;
}
#footer ul.social li a i {
  margin-right: 5px;
  font-size: 25px;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
}
#footer ul.social li:hover a i {
  font-size: 30px;
  margin-top: -10px;
}
#footer ul.social li a,
#footer ul.quick-links li a {
  color: #ffffff;
}
#footer ul.social li a:hover {
  color: #d9a327 !important;
}
#footer ul.quick-links li {
  padding: 3px 0;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
}
#footer ul.quick-links li:hover {
  padding: 3px 0;
  margin-left: 5px;
  font-weight: 700;
}
#footer ul.quick-links li a i {
  margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
  font-weight: 700;
}

@media (max-width: 767px) {
  #footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
  }

}

</style>
