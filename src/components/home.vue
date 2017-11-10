<template>
  <div class="hello">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbo"><img src="https://m.360buyimg.com/mobilecms/s1125x549_jfs/t12877/75/166741228/131674/5df662f8/5a0513d2N41a5050b.jpg!q70.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import common from './comon.js'
export default {
  name: 'HelloWorld',
  data() {
    return {
      lunbo: []
    }
  },
  created() {
    this.getlunboDate();
  },
  methods: {
    getlunboDate() {
      const url = common.apihost + "api/getlunbo"
      this.$http.get(url).then(res => {
        this.lunbo = res.body.message
      }, err => {
        console.log(err);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-swipe {
  width: 100%;
  height: 250px;
}

.mint-swipe img {
  width: 100%;
  height: 100%;
}
</style>
