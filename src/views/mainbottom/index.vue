<template>
  <div style="position:relative;">
    <img src="@/assets/images/bottom.jpg" width="100%">

    <div style="color:#fef0f0 ;position:relative; z-index:2;   top:-120px; text-align:center; ">地址： 中国 广东 深圳
      龙岗区布吉大芬村和通花园3栋405（办公场所）
    </div>
    <div style="position:relative; z-index:2;   top:-100px; text-align:center; ">深圳市宏利达海绵有限公司 版权所有 2019-2020 All
      CopyRights
      Reserve.
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
</style>

