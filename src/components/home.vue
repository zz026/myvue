<template>
  <div class="hello">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in lunbo" :key='index'>
        <a :href="item.url">
          <img :src="item.img" alt="">
        </a>
      </mt-swipe-item>
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
        console.log(this.lunbo);
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
