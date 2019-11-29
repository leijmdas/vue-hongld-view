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

              <Page></Page>
            </el-tab-pane>
            <el-tab-pane label="公司简介" name="explain">

              <Profile></Profile>

            </el-tab-pane>
            <el-tab-pane label="产品展示" name="prd">
              <Prd></Prd>
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
  import Prd from "./views/prd/index";
  import Page from "./views/page/index";

  export default {
    name: 'App',
    components: {Page,Prd,Left,Profile,Bottom,Contact,Feedback,Case},
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
