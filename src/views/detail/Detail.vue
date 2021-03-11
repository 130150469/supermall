<template>
  <div id="detail">
      <detail-nav-bar class="detail-nav"></detail-nav-bar>
      <b-scroll class="contents" ref="scroll"
       @scroll="contentScroll"
       :probe-type="3" >
          <detail-swipter :topImages="topImages"></detail-swipter>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shops="shop"></detail-shop-info>
            <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
            <detail-param-info :paramInfo="paramInfo"></detail-param-info>
            <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
      </b-scroll>
      <back-top @click.native="btnClick" v-show="isShowBackTop"></back-top>
      <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import {getDetail,Goods,Shop,GoodsParams} from 'network/detail.js'
import DetailSwipter from './childComps/DetailSwipter.vue';
import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
import DetailShopInfo from './childComps/DetailShopInfo.vue';
import BScroll from 'components/common/bscroll/BScroll.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue';
import DetailParamInfo from './childComps/DetailParamInfo.vue';
import DetailCommentInfo from './childComps/DetailCommentInfo.vue';
import {backTopMixin} from 'common/mixin.js'
import DetailBottomBar from './childComps/DetailBottomBar.vue';

export default {
    name:"Detail",
    data(){
        return {
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            
        }
    },
    // 混入
    mixins:[backTopMixin],
    components:{
        DetailNavBar,
        DetailSwipter,
        DetailBaseInfo,
        DetailShopInfo,
        BScroll,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        DetailBottomBar
    },
    methods:{
        imgLoad(){
            this.$refs.scroll.refresh();
        },
        contentScroll(position){
            this.isShowBackTop = Math.abs(position.y) > 1000;
        },
        addCart(){
            //1.获取商品需要展示的信息
            const product = {};
            product.image = this.topImages[0];
            product.title = this.goods.title;
            product.desc = this.goods.desc;
            product.price = this.goods.realPrice;
            product.iid = this.iid;
            console.log(this.$store);
            //2.将商品添加到购物车中
            this.$store.dispatch("addCart",product)
        }
    },
    mounted(){
        this.$refs.scroll.scrollTo(0,0,50)
        //1.保存iid
        this.iid = this.$route.params.iid;
        //2.请求相关数据信息
        getDetail(this.iid).then(res => {
            //1.获取顶部的轮播数据
            this.topImages = res.result.itemInfo.topImages;
            //2.获取商品信息
            const data = res.result;
            //console.log(res);
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);

            //3.创建店铺信息
            this.shop = new Shop(data.shopInfo);

            //4.保存商品详情数据
             this.detailInfo = data.detailInfo;

             //5.获取参数详情信息
             this.paramInfo = new GoodsParams(data.itemParams.info,data.itemParams.rule)

             //6.取出评论信息
             if(data.rate.cRate !== 0){
                 this.commentInfo = data.rate.list[0];
             }
        })
    }
}
</script>

<style scoped>
    #detail{
        position: relative;
        z-index: 15;
        background-color: #fff;
        height: 100vh;
        overflow: hidden;
    }
    .detail-nav{
        position: relative;
        z-index: 15;
        background-color: #fff;
    }
    .contents{
        height:calc(100% - 44px);
    }
</style>