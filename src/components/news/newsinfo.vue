<template>
    <div>
        <!--标题  -->
        <div class="titleStyle">
            <h3>{{newsinfo.title}}</h3>
            <p>
                <span>{{newsinfo.add_time | datefilter}}</span>&nbsp;&nbsp;&nbsp;
                <span>{{newsinfo.click}}次浏览</span>&nbsp;&nbsp; &nbsp;
                <span>分类:民生经济</span>
            </p>
        </div>
        <!--内容  -->
        <div class="contentStyle">
            <div v-html="newsinfo.content"></div>
        </div>

        <!--评论子组件  -->
        <subcomment :commentId="this.$route.params.newsId"></subcomment>
    </div>
</template>
  
<style scoped>
.titleStyle,
.contentStyle {
    padding: 10px;
}

h3 {
    font-size: 16px;
    color: #0094ff;
}

.titleStyle {
    border-bottom: 1px solid rgba(92, 92, 92, 0.3);
}

img {
    width: 100%;
}
</style>

<script>
import common from '../common.js'
import subcomment from '../subcomments/subcomment.vue'
export default {
    data() {
        return {
            newsinfo: {}
        }
    },
    created() {
        this.getnewsinfoDate();
    },
    methods: {
        getnewsinfoDate() {
            const url = `${common.apihost}api/getnew/${this.$route.params.newsId}`
            const _this = this;
            this.$http.get(url).then(res => {
                // console.log(res.data.message[0])
                _this.newsinfo = res.data.message[0];
            }).catch(err => {
                console.log(err);
            })
        }
    },
    components: {
        subcomment: subcomment
    }
}
</script>