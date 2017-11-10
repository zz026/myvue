<template>
  <div id="app">
    <mt-header fixed title="Vue"></mt-header>
    <router-view/>
    <mt-tabbar>
      <mt-tab-item id="外卖">
        <img slot="icon" src="http://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="http://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
