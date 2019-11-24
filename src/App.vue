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

        <el-carousel indicator-position="outside" height="400px" interval="2500">
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
        <el-aside width="20%" style="background-color: rgb(238, 241, 246)"></el-aside>
        <el-main>

              <el-tabs stretch="true" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="首页" name="page">首页</el-tab-pane>
                <el-tab-pane label="公司简介" name="explain">公司简介</el-tab-pane>
                <el-tab-pane label="产品展示" name="prd">产品展示</el-tab-pane>
                <el-tab-pane label="资质/案例" name="case">案例</el-tab-pane>
                <el-tab-pane label="客户反馈" name="feedback">客户反馈</el-tab-pane>
                <el-tab-pane align="center" label="联系我们" name="contact">
                  <el-col :span="16">
                  <div>
                    <el-row>
                      <div text-align="left" class="div-title">
                        <span class="pTitle"> 联系方式 </span>
                      </div>
                    </el-row>

                    <el-divider></el-divider>
                    <el-row>
                      <div height="20px" class="div-a" >
                        深圳市宏利达海棉有限公司
                      </div>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row>
                      <div class="div-a">
                        联 系 人：朱金星 先生 (销售经理)
                      </div>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row>
                      <div  class="div-button">
                        <el-button>查看公司介绍</el-button>
                        <el-button>查看信用状况</el-button>

                      </div>
                    </el-row>
                    <el-row>
                    <div class="div-a">
                      电 话：86 755 29736896-807
                    </div>
                    </el-row>
                    <el-row>
                    <div  class="div-a">移动电话：13538116703</div>
                    </el-row>
                    <el-row>
                      <div  class="div-a">传 真：86 755 29736003</div>
                    </el-row>
                    <el-row>
                      <div  class="div-a">地 址：中国 广东 深圳市龙岗区 平湖镇辅城坳凤岐路2-2号</div>
                    </el-row>
                    <el-row>
                      <div  class="div-a">邮 编：518000</div>
                    </el-row>

                  </div>
                  </el-col>
                </el-tab-pane>
              </el-tabs>

        </el-main>
      </el-container>
    </div>

    <div style="position:relative;">
      <img src="@/assets/images/bottom.jpg" width="100%"/>
      　　
      <div style="position:relative; z-index:2;   top:-100px; text-align:center; ">深圳市宏利达海绵有限公司 版权所有 2019-2020 All
        CopyRights
        Reserve.
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>
  .pTitle{
    alignment: left;
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
