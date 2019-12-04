<template>
  <div>
    <el-row>
      <img src="@/assets/images/company/brief1.jpg">
    </el-row>
    <el-row>
      <img src="@/assets/images/company/prd/prd1.jpg">
    </el-row>
    <el-row>
      <img src="@/assets/images/company/prd/prd2.jpg">
    </el-row>
    <el-row>
      <img src="@/assets/images/company/prd/prd3.jpg">
    </el-row>
    <el-row>
      <img src="@/assets/images/company/prd/prd4.jpg">
    </el-row>

    <el-row>
      <el-col :span="1"><p />
      </el-col>
      <!--<el-col :span="6">-->
      <!--<img src="@/assets/images/company/brief2.jpg"/>-->
      <!--</el-col>-->
      <el-col :span="18">
        <!--<el-divider class="pCompany" content-position="right"> 公司简介 </el-divider>-->

        <span class="pCompany">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;深圳市宏利达海棉厂是中国首席记忆海棉制造商，国内唯一一家引进德国专业技术研制开发聚氨酯产品的制造企业.
          专业生产:各种慢回弹海棉（惰性海棉）,包括电脑包硬质慢回弹及床垫软质慢回弹,及特殊电子防火防静电海棉，聚酯海棉,压缩海棉.
          适合行业：手袋，箱包，医疗保健按摩垫，护具，玩具，运动用品，工艺品，电子产品，枕头床垫，坐垫，靠垫及其他海棉制品等.
          多年来, 宏利达海棉厂凭借优质的技术和服务赢得了广大用户的信任和良好信誉. 本公司本著以客户为导向以技术为核心, 以服务为支持的真诚, 务实的精神, 品质保证, 精益求精, 准时交货, 与各行各业客户紧密合作,
          不断进取，与您共发展。
        </span>
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
.line{
  text-align: center;
}
</style>

