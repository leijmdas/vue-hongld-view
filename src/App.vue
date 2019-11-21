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
      <template>
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
      </template>
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
    name: 'App'
  }
</script>
