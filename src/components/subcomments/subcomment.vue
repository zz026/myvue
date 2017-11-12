<template>
  <div>
    <!--评论子组件 {{commentId}} -->
    <div class="submitCommentStyle">
      <h4>提交评论</h4>
      <textarea cols="30" rows="5" placeholder="请输入评论内容" ref="text"></textarea>
      <mt-button type="primary" size="large" @click="sendSubcomment">提交评论</mt-button>
    </div>
    <div class="commentListStyle">
      <h4>评论列表</h4>
      <div class="commentItemStyle" v-for="(item,index) in subcommentArr" :key='index'>
        <p class="commentConentStyle">{{item.content}}</p>
        <p class="commentUserAndTimeStyle">
          <span>匿名用户</span>
          <span>{{item.add_time|datefilter}}</span>
        </p>
      </div>
      <mt-button type="danger" size="large" plain class="loadMoreStyle" @click='getMore'>加载更多</mt-button>
    </div>
  </div>
</template>

<style>
.submitCommentStyle,
.commentListStyle {
  padding: 8px;
}

h4 {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
}

.commentItemStyle {
  height: 100px;
  overflow-y: auto;
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
}

.commentConentStyle {
  margin-top: 10px;
  color: black;
  font-size: 14px;
}

.commentUserAndTimeStyle {
  margin-top: 30px;
  color: #0094ff;
  display: flex;
  justify-content: space-between;
}

.loadMoreStyle {
  margin-top: 10px;
}
</style>

<script>
import common from '../common.js'
import { Toast } from 'mint-ui';
import qs from 'qs'

export default {
  props: ['commentId'],
  data() {
    return {
      pageindex: 1,
      subcommentArr: []
    }
  },
  created() {
    this.getsubcommentDate();
  },
  methods: {
    getsubcommentDate() {
      const url = common.apihost + 'api/getcomments/' + this.commentId + '?pageindex=' + this.pageindex
      this.$http.get(url).then(res => {
        if (this.pageindex == 1) {
          //console.log(res.data.message)
          if (res.data.message == '') {
            Toast({
              message: '还没沙发哟，快来抢占',
              position: 'middle',
              duration: 5000
            });
          } else {
            this.subcommentArr = res.data.message;
          }
        } else {
          if (res.data.message == '') {
            Toast({
              message: '人家是有底线的',
              position: 'middle',
              duration: 5000
            });
          } else {
            this.subcommentArr = this.subcommentArr.concat(res.data.message);
          }
        }

      }).catch(err => {
        console.log(err);
      })
    },
    getMore() {
      this.pageindex++;
      this.getsubcommentDate()
    },
    sendSubcomment() {
      const content = this.$refs.text.value;
      const url = common.apihost + "api/postcomment/" + this.commentId;
      this.$http.post(url, qs.stringify({ 'content': content })).then(res => {
        //console.log(res.data.message);
        Toast({
          message: res.data.message,
          position: 'middle',
          duration: 3000
        });
        this.pageindex = 1;
        this.$refs.text.value = '';
        this.getsubcommentDate();
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>