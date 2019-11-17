<template>
 <div>

 <h1 class="red">{{msg}}</h1>
  <input type="text" v-model="msg">
   <button type="button" @click="demo">com buttob</button>
 </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      msg: 'Hello worldcom!'
    }
  },
  methods:{
    demo (){

    }
  }
}
</script>

<style scoped>
  .red {
    color: #f00;
  }
</style>
