<template>
    <div>
        <div class="mianbao">
            <ul>
                <li @click="photoListData(0)">全部</li>
                <li v-for="item in mianbaoxie" :key="item.id" @click="photoListData(item.id)">{{item.title}}</li>
            </ul>
        </div>
        <div class="imgList">
            <ul>
                <li v-for="item in photoList" :key="item.id">
                    <router-link to="">
                        <img :src="item.img_url" alt="">
                        <div>
                            <h3>{{item.title}}</h3>
                            <p v-html="item.zhaiyao"></p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang='less'>
.mianbao {
    overflow: auto;
    ul {
        width: 300%;
        margin: 0;
        padding: 0;
        li {
            margin: 5px 5px;
            list-style: none;
            float: left;
            height: 40px;
            color: #0094ff;
        }
    }
}

img {
    width: 100%;
    height: 400px;
}

.imgList {
    ul {
        margin: 3px 0px;
        padding: 0px;
        list-style: none;
        li {
            padding: 2px;
            position: relative;
            div {
                position: absolute;
                left: 3px;
                bottom: 5px;
                width: 98%;
                background-color: rgba(0, 0, 0, 0.3);
                color: white;
                font-size: 14px;
                p {
                    color: white;
                }
                h3 {
                    font-size: 16px;
                    font-weight: 900;
                }
            }
        }
    }
}
</style>

<script>
import common from '../common.js'
export default {
    data() {
        return {
            mianbaoxie: [],
            photoList: []
        }
    },
    created() {
        this.mianbaoxieData()
        this.photoListData(0)
    },
    methods: {
        mianbaoxieData() {
            const url = `${common.apihost}api/getimgcategory`
            this.$http.get(url).then(res => {
                //console.log(res.data.message);
                this.mianbaoxie = res.data.message;
            }).catch(err => {
                console.log(err);
            })
        },
        photoListData(num) {
            const url = common.apihost + 'api/getimages/' + num
            console.log(url)
            this.$http.get(url).then(res => {
                console.log(res.data.message)
                this.photoList = res.data.message
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>
