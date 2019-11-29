<template>
  <div id="app">
    <!--<router-view />-->
    <div align="center"><img src="@/assets/images/welcome.jpg"/></div>
    <div align="center">
      <img src="@/assets/images/hld.jpg"/>
    </div>
    <!--<div align="middle">-->
    <!--<img src="@/assets/images/banner1.jpg"/>-->
    <!--</div>-->
    <div>

        <el-carousel indicator-position="outside" height="400px" :interval="2500">
          <el-carousel-item v-for="item in 4" :key="item">
            <div class="block" align="center">

              <img v-if="item==1" src="@/assets/images/banner1.jpg"/>
              <img v-if="item==2" src="@/assets/images/banner2.jpg"/>
              <img v-if="item==3" src="@/assets/images/banner3.jpg"/>
              <img v-if="item==4" src="@/assets/images/banner4.jpg"/>
            </div>
          </el-carousel-item>
        </el-carousel>

    </div>
    <div text-align="center" height="600px">

      <el-container style="height: 800px; border: 1px solid #eee">
        <el-aside width="12%" style="background-color: rgb(238, 241, 246)">

          <Left></Left>
        </el-aside>
        <el-main>

          <el-tabs :stretch="true" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="首页" name="page">

              <Left></Left>
            </el-tab-pane>
            <el-tab-pane label="公司简介" name="explain">
              <!--<el-row>-->
                <!--<img src="@/assets/images/company/brief1.jpg"/>-->
              <!--</el-row>-->
              <!--<el-row>-->
                <!--<img src="@/assets/images/company/prd/prd1.jpg"/>-->
              <!--</el-row>-->
              <!--<el-row>-->
                <!--<img src="@/assets/images/company/prd/prd2.jpg"/>-->
              <!--</el-row>-->
              <!--<el-row>-->
                <!--<img src="@/assets/images/company/prd/prd3.jpg"/>-->
              <!--</el-row>-->
              <!--<el-row>-->
                <!--<img src="@/assets/images/company/prd/prd4.jpg"/>-->
              <!--</el-row>-->

              <!--<el-row>-->
                <!--<el-col :span="1"><p></p>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                  <!--<img src="@/assets/images/company/brief2.jpg"/>-->
                <!--</el-col>-->
                <!--<el-col :span="13">-->
                  <!--&lt;!&ndash;<div>&ndash;&gt;-->
                  <!--&lt;!&ndash;<el-divider class="pCompany" content-position="right"> 公司简介 </el-divider>&ndash;&gt;-->
                  <!--&lt;!&ndash;</div>&ndash;&gt;-->
                  <!--<span class="pCompany">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;深圳市宏利达海棉厂是中国首席记忆海棉制造商，国内唯一一家引进德国专业技术研制开发聚氨酯产品的制造企业.-->
    <!--专业生产:各种慢回弹海棉（惰性海棉）,包括电脑包硬质慢回弹及床垫软质慢回弹,及特殊电子防火防静电海棉，聚酯海棉,压缩海棉.-->
    <!--适合行业：手袋，箱包，医疗保健按摩垫，护具，玩具，运动用品，工艺品，电子产品，枕头床垫，坐垫，靠垫及其他海棉制品等.-->
    <!--多年来, 宏利达海棉厂凭借优质的技术和服务赢得了广大用户的信任和良好信誉. 本公司本著以客户为导向以技术为核心, 以服务为支持的真诚, 务实的精神, 品质保证, 精益求精, 准时交货, 与各行各业客户紧密合作,-->
                        <!--不断进取，与您共发展。-->
                      <!--</span>-->
                <!--</el-col>-->
              <!--</el-row>-->
              <Profile></Profile>

            </el-tab-pane>
            <el-tab-pane label="产品展示" name="prd">
              <Left></Left>
            </el-tab-pane>
            <el-tab-pane label="资质/案例" name="case">
              <Case></Case>
            </el-tab-pane>

            <el-tab-pane label="联系我们" name="contact">
             <Contact></Contact>
            </el-tab-pane>
            <el-tab-pane label="客户反馈" name="feedback">
              <Feedback width="50%"></Feedback>
            </el-tab-pane>
          </el-tabs>

        </el-main>
      </el-container>
    </div>

    <!--<div style="position:relative;">-->
      <!--<img src="@/assets/images/bottom.jpg" width="100%"/>-->
      <!--　　<div style="color:#fef0f0 ;position:relative; z-index:2;   top:-120px; text-align:center; ">地址： 中国 广东 深圳 龙岗区布吉大芬村和通花园3栋405（办公场所） </div>-->
      <!--<div style="position:relative; z-index:2;   top:-100px; text-align:center; ">深圳市宏利达海绵有限公司 版权所有 2019-2020 All-->
        <!--CopyRights-->
        <!--Reserve.-->
      <!--</div>-->

    <!--</div>-->
    <Bottom></Bottom>
  </div>
</template>


<style scoped>
  .pCompany{
    margin-left: 10px;
    margin-top: 20px;
    font-weight:bold;
    font-size:larger;
    color: darkgreen;
  }

  .pTitle{
    margin-left: 10px;
    margin-top: 20px;
    font-weight:bold;
    color: white;
  }

  .div-title {
    float: left;
    width: 100%;
    height: 30px;
    background: black;
  }

  .div-a {
    float: left;
    height: 30px;
    style: "background:#000; color:#FFF"
  }

  .div-button {
    float: left;
    height: 60px;
    style: "background:#000; color:#FFF"
  }

  .div-b {
    float: right;
    border: 1px solid #999;
    height: 30px;
  }

  .div-c {
    float: left;
    height: 30px;
  }
</style>
<script>
  import Left from "./views/left/index";
  import Bottom from "./views/mainbottom/index";
  import Contact from "./views/contact/index";
  import Feedback from "./views/feedback/index";
  import Case from "./views/case/index";
  import Profile from "./views/profile/index";

  export default {
    name: 'App',
    components: {Left,Profile,Bottom,Contact,Feedback,Case},
    data() {
      return {
        activeName: 'page'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
