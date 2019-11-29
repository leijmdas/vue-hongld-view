<template>
  <div>
    <img src="@/assets/images/company/prd/prdtype.jpg"/>
    <div></div>

    <div class="div-a" align="bottom">
      <img src="@/assets/images/company/prd/contact.jpg"/>
      <el-row>
        <el-col  >
          <el-row>
            <div class="div-a">
              联系人：朱金星先生
            </div>
          </el-row>
          <el-row>
            <div class="div-a">
              电 话：86 755 29736896-807
            </div>
          </el-row>
          <el-row>
            <div class="div-a">电 话：13538116703</div>
          </el-row>
          <el-row>
            <div class="div-a">传 真：86 755 29736003</div>
          </el-row>
          <el-row>
            <div class="div-b">地 址：中国 广东 深圳市龙岗区 平湖镇辅城坳凤岐路2-2号</div>
          </el-row>
          <el-row>
            <div class="div-a">邮 编：518000</div>
          </el-row>

        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}

.div-a {
  float: left;
  height: 30px;
  style: "background:#000; color:#FFF"
}
.div-b {
  float: left;
  height: 60px;
  style: "background:#000; color:#FFF"
}

</style>

