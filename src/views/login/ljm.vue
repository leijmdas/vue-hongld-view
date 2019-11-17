<template>
  <div>
    <div style="margin-left:100px;width:580px" >
      <fieldset>
        <legend style="margin-top:60px; ">审核提现</legend>
        <el-form ref="form" label-width="100px">

          <el-form-item label="" prop="status">
            <el-radio-group   v-model="r">
              <div>
                <el-radio key="3"   label="3">通过</el-radio>
              </div>
              <div></div>
              <div>
                <el-radio key="4" label="4">未通过</el-radio>
              </div>
            </el-radio-group>
          </el-form-item>
          <el-input style="margin-left:80px;width:390px" type="textarea" rows="6"
                    v-model="r"
                    :clearable="true"
                    width="200px" placeholder="审核意见">

          </el-input>

          <div style="margin-left:180px;margin-top: 10px;margin-bottom: 30px">
            <el-button style="margin-right:20px;margin-top: 10px" type="primary">保存
            </el-button>
            <el-button>取消</el-button>
          </div>
        </el-form>
      </fieldset>

      <h1 class="red foo">{{msg}}</h1>
      <button type="button" @click="postDemo">post demo</button>
      <input ref="txt" v-model="r" type="text">
      <com ref="mycom"></com>

      <my-slot>
        <p class="green" slot="title">{{title+"1"}}</p>
        <p class="green" slot="title">{{title+"2"}}</p>
        <div slot="content">{{content}}</div>
      </my-slot>
    </div>
    <div>
      <ul>
        <li @click="currentView='home'">Home</li>
        <li @click="currentView='list'">List</li>
        <li @click="currentView='detail'">detail</li>

      </ul>
    </div>
    <ul id="menu">
      <li><a href="http://www.baidu.com">Baidu.Com</a></li>
      <li><a href="http://www.Code52.Net">Code52.Net</a></li>
      <li><a href="http://www.google.com" class="last">Google.Com</a></li>
    </ul>

    <component :is="currentView"></component>


  </div>
</template>
<style scoped>
  .red {
    color: #f00;
  }

  .green {
    color: #0ff;
  }

  .foo {
    margin-left: 100px;
    font-size: medium;

    height: 300px;
    width: 400px;
  }

  .el-input {
    margin-left: 280px;
  }

  .el-radio  {
    margin-top: 20px;
    margin-left: -20px;
    font-size: 30px;

    height: 30px;
    width: 30px;
  }

  .panel-search {
    padding: 5px;

  }

  .displayField input, .displayField .text-input {
    border: none;
    border-bottom: 1px solid #ebeef5;
    pointer-events: auto;
  }
</style>

<script>
  import axios from 'axios';
  import com from "./com.vue";
  import mySlot from "./myslot.vue";
  import vue from "vue";
  import home from "./home.vue";
  import list from "./list.vue";
  import detail from "./detail.vue";

  export default {
    components: {
      com, mySlot, home, list, detail

      // home: {
      //   template: '<div>home</div>'
      // },
      // list: {
      //   template: '<div>list</div>'
      // },
      // detail: {
      //   template: '<div>detail</div>'
      // },


    },

    data() {
      return {
        r: "3",
        msg: 'Hello world!',
        title: " this is title",
        content: " this is content!",
        currentView: "home"
      }
    },
    methods: {
      postDemo() {
        axios.post(
          "/xw/service/demo",
          {
            "apiKey": "111",
            "cmd": "demo",
            "cmdtype": "string",
            "msgBody": {
              "additionalProp1": {"uu": 1},
              "additionalProp2": {},
              "additionalProp3": {}
            },
            "reqtime": 10,
            "seqno": 101,
            "sign": "string",
            "testFlag": true,
            "token": "1133"
          }
        ).then(
          msg => {
            this.r = JSON.stringify(msg.data);
            console.log(msg.data);
            console.log("value=" + this.$refs.txt.value);
          }
        );

        this.$refs.mycom.demo();
        // alert(this.$refs.mycom.msg+"**");
        //  alert("value="+this.$refs.txt.value );

      }
    }
  }
</script>

