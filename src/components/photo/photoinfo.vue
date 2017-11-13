<template>
  <div>
     
    <div class="title">
        <h3>{{getphotoInfo.title}}</h3>
        <p>
            <span>{{getphotoInfo.add_time|datefilter('YYYY-MM-DD HH:mm')}}</span>
            <span>{{getphotoInfo.click}}次浏览</span>
        </p>
    </div>
    <div class="content"></div>
    <subcomment :commentId="this.$route.params.photoId"></subcomment>
  </div>
</template>

<style scoped lang='less'>

</style>

<script>
import common from "../common.js";
import subcomment from "../subcomments/subcomment.vue";
export default {
  data() {
    return {
      getphotoInfo: {}
    };
  },
  created() {
    this.getphotoInfoDate();
  },
  methods: {
    getphotoInfoDate() {
        const url = common.apihost + "api/getimageInfo/" + this.$route.params.photoId;
        this.$http.get(url).then(res=>{
            this.getphotoInfo = res.data.message[0];
            console.log(res.data.message[0])
        }).catch(err=>{
            console.log(err);
        })
    }
  },
  components: {
    subcomment
  }
};
</script>

