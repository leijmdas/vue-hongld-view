<template>
  <div>
    <el-row>
      <el-col :span="4">
        <img src="@/assets/images/contact1.png">

      </el-col>
      <el-col :span="16">
        <el-row>
          <div text-align="left" class="div-title">
            <span class="pTitle"> 联系方式 </span>
          </div>
        </el-row>

        <el-row>
          <div height="20px" class="div-a">
            深圳市宏利达海棉有限公司
          </div>
        </el-row>
        <el-row>
          <div class="div-a">
            联 系 人：朱先生 (销售经理)
          </div>
        </el-row>
        <el-row>
          <div class="div-button">
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
          <div class="div-a">移动电话：13538116703</div>
        </el-row>
        <el-row>
          <div class="div-a">传 真：86 755 29736003</div>
        </el-row>
        <el-row>
          <div class="div-a">地 址：中国 广东 深圳市龙岗区 平湖镇辅城坳凤岐路2-2号</div>
        </el-row>
        <el-row>
          <div class="div-a">邮 编：518000</div>
        </el-row>

      </el-col>
    </el-row>
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
