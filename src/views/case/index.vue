<template>
  <div class="app-container">

    <el-form ref="form" :model="form" label-width="120px">
      <el-row>
        <el-col :span="6">
          <el-form-item label="姓名">
            <el-input v-model="form.name"/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="电话">
            <el-input v-model="form.tel"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="Email">
            <el-input v-model="form.Email"/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="QQ">
            <el-input v-model="form.QQ"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="手机">
            <el-input v-model="form.mobile"/>

          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="微信">
            <el-input v-model="form.vx"/>

          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="详细地址">
        <el-col :span="11">
        <el-input v-model="form.address"/>
        </el-col>
      </el-form-item>
      <el-form-item label="留言">
        <el-col :span="11">
          <el-input v-model="form.bbs"
            type="textarea"
            :rows="6"
            placeholder="请输入留言" >
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item>

        <el-button size="medium" @onclick="alert('提交留言响应')">提交留言</el-button>
      </el-form-item>

    </el-form>

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

