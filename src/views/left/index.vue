<template>
  <div>
    <img src="@/assets/images/company/prd/prdtype.jpg"/>
    <div>
      <div class="div-c"> 记忆棉眼罩</div>
      <div class="div-c"> 记忆棉枕头</div>
      <div class="div-c"> 形状海绵</div>
      <div class="div-c"> 海绵内衬</div>
      <div class="div-c">低密度海绵</div>
      <div class="div-c">中高密度海绵</div>
      <div class="div-c">阻燃防火海绵</div>
      <div class="div-c">慢回弹记忆海</div>
      <div class="div-c">凝胶梦幻记忆</div>
    </div>

    <div class="div-a">
      <img src="@/assets/images/company/prd/contact.jpg"/>
      <br/>
      <br/>

      <el-row>
        <div class="div-a">
          联系人：朱金星先生
        </div>
      </el-row>
      <el-row>
        <div class="div-a">
          电&nbsp;&nbsp;话：86 755 29736896-807
        </div>
      </el-row>
      <el-row>
        <div class="div-a">电 话：13538116703</div>
      </el-row>
      <el-row>
        <div class="div-a">传 真：86 755 29736003</div>
      </el-row>

      <el-row>
        <div class="div-a">邮 箱：xxx@163.com</div>
      </el-row>

      <el-row>
        <div class="div-b">地 址：中国 广东 深圳市龙岗区 平湖镇辅城坳凤岐路2-2号</div>
      </el-row>
      <el-row>
        <div class="div-a">邮 编：518000</div>
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
  .line {
    text-align: center;
  }

  .div-a {
    margin-left: 5px;
    float: left;
    height: 30px;
    style: "background:#000; color:#FFF"
  }

  .div-b {
    margin-left: 5px;
    float: left;
    height: 50px;
    style: "background:#000; color:#FFF"
  }

  .div-c {
    margin-left: 10px;
    float: center;
    height: 20px;
    style: "background:#000; color:#FFF"
  }
</style>

