<template>
  <div>
    <!--顶部  -->
    <div class="title">
      <h3>{{getphotoInfo.title}}</h3>
      <p>
        <span>{{getphotoInfo.add_time|datefilter('YYYY-MM-DD HH:mm')}}</span>
        <span>{{getphotoInfo.click}}次浏览</span>
      </p>
    </div>
    <!--缩略图  -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item,index) in getsmallphoto" :key="index">
          <!-- <img :src="item.src" alt="" class="preview-img"> -->
          <img class="preview-img" :src="item.src" @click="$preview.open(index, getsmallphoto)">
        </li>
      </ul>
    </div>
    <!--详情  -->
    <div class="content" v-html="getphotoInfo.content"></div>
    <subcomment :commentId="this.$route.params.photoId"></subcomment>
  </div>
</template>

<style scoped lang='less'>
  img{
    height: 100px;
  }
</style>

<script>
import common from "../common.js";
import subcomment from "../subcomments/subcomment.vue";
export default {
  data() {
    return {
      getphotoInfo: {},
      getsmallphoto: []
    };
  },
  created() {
    this.getphotoInfoDate();
    this.getsmallphotoData();
  },
  methods: {
    getphotoInfoDate() {
      const url = common.apihost + "api/getimageInfo/" + this.$route.params.photoId;
      this.$http.get(url).then(res => {
        this.getphotoInfo = res.data.message[0];
        //console.log(res.data.message[0])
      }).catch(err => {
        console.log(err);
      })
    },
    getsmallphotoData() {
      const url = `${common.apihost}api/getthumimages/${this.$route.params.photoId}`
      this.$http.get(url).then(res => {
        res.data.message.forEach(item=>{
          item.w=400
          item.h=400
        });
        console.log(res.data.message);
        this.getsmallphoto = res.data.message;
      }).catch(err => {
        console.log(err);
      })
    }
  },
  components: {
    subcomment
  }
};
</script>

