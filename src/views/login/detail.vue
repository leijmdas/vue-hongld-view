<template>
 <div>

 <h1 class="red">{{msg}}</h1>

 </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      msg: 'detail'
    }
  },
  methods:{
    demo (){

      alert("com demo");
    }
  }
}
</script>

<style scoped>
  .red {
    color: #f00;
  }
</style>
