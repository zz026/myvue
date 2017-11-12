<template>
  <div id="app">
    <mt-header fixed title="Vue">
    </mt-header>
    <div class="backStyle" v-show="isBackShow" @click="back">&lt;</div>
    <router-view class="centerContent"></router-view>
    <mt-tabbar :class="isBackShow ? 'hideTabBarStyle' : ''">
      <mt-tab-item>
        <img src="http://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
      </mt-tab-item>
      <mt-tab-item>
        <img src="http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
      </mt-tab-item>
      <mt-tab-item>
        <img src="http://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">
      </mt-tab-item>
      <mt-tab-item>
        <img src="http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBackShow: false
    }
  },
  created() {
    //console.log(this)
    this.isShowOrHide();
  },
  methods: {
    back() {
      //history.go(-1);
      this.$router.go(-1);
    },
    isShowOrHide(path) {
      if (path != '/home') {
        this.isBackShow = true;
      } else {
        this.isBackShow = false;
      }
    }
  },
  watch: {
    $route: function(newValue, oldValue) {
      //console.log(newValue);
      this.isShowOrHide(newValue.path)
    }
  }
}
</script>

<style scoped>
.mint-tabbar>.mint-tab-item.is-selected {
  background-color: #fff;
}

img {
  width: 42px;
  height: 35px;
}

.backStyle {
  position: fixed;
  top: 10px;
  left: 15px;
  z-index: 2;
  color: #fff;
  font-size: 25px;
  /* font-weight: 700; */
}

.hideTabBarStyle {
  display: none;
}
</style>
