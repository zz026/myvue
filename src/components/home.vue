<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in lunbo" :key='index'>
        <a :href="item.url">
          <img :src="item.img" alt="">
        </a>
      </mt-swipe-item>
    </mt-swipe>

    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/news/newslist">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/photo/photolist">
            <span class="mui-icon mui-icon-email">
              <span class="mui-badge">5</span>
            </span>
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品购买</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import common from './common.js'

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
      /*resourse写法
      this.$http.get(url).then(res => {
       this.lunbo = res.body.message
       console.dir(this.lunbo);
     }, err => {
       console.log(err);
     })
     vue-axios写法 （有bug）
     Vue.axios.get(url).then((response) => {
        console.log(response.data)
      })
      */
      //下面是axios写法
      var _this = this;
      this.$http.get(url)
        .then(res => {
          //console.log(res.data.message);
          _this.lunbo = res.data.message
        })
        .catch(err => {
          console.log(err);
        });

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*轮播图样式*/

.mint-swipe {
  width: 100%;
  height: 250px;
}

.mint-swipe img {
  width: 100%;
  height: 100%;
}













/*九宫格样式*/

.mui-content {
  background-color: #fff;
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: 0;
}

.mui-grid-view.mui-grid-9 li {
  border: 0;
}

.mui-icon {
  width: 50px;
  height: 50px;
}

.mui-icon::before {
  content: '';
}

.mui-icon-home {
  background: url(../../static/images/menu3.png);
  background-size: cover;
}

.mui-icon-email {
  background: url(../../static/images/menu4.png);
  background-size: cover;
}

.mui-icon-chatbubble {
  background: url(../../static/images/menu5.png);
  background-size: cover;
}

.mui-icon-location {
  background: url(../../static/images/menu6.png);
  background-size: cover;
}

.mui-icon-search {
  background: url(../../static/images/menu7.png);
  background-size: cover;
}

.mui-icon-phone {
  background: url(../../static/images/menu8.png);
  background-size: cover;
}
</style>
