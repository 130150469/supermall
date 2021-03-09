<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <tab-control :titles="['语文','数学','英语']" @tabClick="tabClick" ref="tabControl1" class="tabControls" v-show="isFixed" ></tab-control>
      <!-- 子组件驼峰命名的话  在父组件要使用 -进行连接     -->
      <b-scroll class="content" ref="scroll" 
                                :probe-type="3" 
                                @scroll="contentScroll" 
                                :pull-up-load="true"
                                @pullingUp="loadMore">
        <home-swiper :banners="banners" @SwipterImgLoad="SwipterImgLoad"></home-swiper>
        <recommend-view :recommend="recommend"></recommend-view>
        <feature-view></feature-view>
        <tab-control :titles="['语文','数学','英语']" @tabClick="tabClick" ref="tabControl2"  ></tab-control>
        <goods-list :goods="showGoods"></goods-list>
      </b-scroll>
      <!-- 给组件添加监听事件 需要native属性 -->
      <back-top @click.native="btnClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import {getMultiData,getHomeGoods} from 'network/home'
import HomeSwiper from './childComponents/HomeSwiper'
import RecommendView from './childComponents/RecommendView.vue'
import FeatureView from './childComponents/FeatureView.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import BScroll from 'components/common/bscroll/BScroll.vue'
import BackTop from 'components/common/backtop/BackTop.vue'
import {debounce} from 'common/utils'

export default {
  name:"Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    BScroll,
    BackTop,
 
  },
  data(){
    return {
      banners:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop',
      isShowBackTop:false,
      tabOffsetTop:0,
      isFixed:false,
      pageY:0
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list;
    }
  },
  created(){
    //1.请求多个数据
    this.getMultiData();
    //2.请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
    
    
  },
  mounted(){
    const refersh = debounce(this.$refs.scroll.refresh,1000)
    // $refs 不要再created里面用 有可能没有完成
    this.$bus.$on("itemImgLoad",() => {
      //刷新 Better-Scroll content 高度
      refersh();
    })
    
  },
  methods:{
    /**
     * 事件监听相关方法
     * 
     */
    
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    btnClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    contentScroll(position){
      //1.是否显示返回顶部的图表
      this.isShowBackTop = Math.abs(position.y) > 1000;

      //2.tabControl吸顶判断
      this.isFixed = (Math.abs(position.y) > (this.tabOffsetTop-35));
    },
    loadMore(){
      this.getHomeGoods(this.currentType);
    },

    /**
     * 网络请求相关方法
     */
    getMultiData(){
        getMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        //console.log(res)
      })
    },
    getHomeGoods(type){
       const page = this.goods[type]["page"] + 1;
       getHomeGoods(type,page).then(res => {
          this.goods[type]["list"].push(... res.data.list) 
          this.goods[type]["page"] = page;
          // 完成上拉加载更多
          this.$refs.scroll.finishPullUp();
      })
    },
    SwipterImgLoad(){
      //tabControl 吸顶效果
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      //console.log( this.tabOffsetTop);
    }
  },
  activated(){
    //console.log("激活页面");
    //滚动到上次要保留的位置
    // this.$refs.scroll.refresh();
    // 不能设置为0
    this.$refs.scroll.scrollTo(0,this.pageY,50)
    console.log(this.pageY);
  },
  destroyed(){
    console.log("页面被销毁了");
  },
  deactivated(){
    //console.log("失去焦点");
    this.pageY = this.$refs.scroll.scroll ? this.$refs.scroll.scroll.y : 0;
    //console.log(this.$refs.scroll.scroll.y)
  }
}
</script>

<style scoped>
    #home{
      /* padding-top: 44px; */
      position:relative;
      height: 100vh;
    }
    .home-nav{
      background-color: var(--color-tint);
      color:#fff;
      /* position: fixed;
      left: 0;
      top: 0;
      right: 0;
      z-index: 1000; */
    }
    .tabControls{
      position: absolute;
      width: 100%;
    }
    /* .content{
      position: absolute;
      top:44px;
      bottom:49px;
      left: 0px;
      right: 0px;
      overflow: hidden;
    } */

    .content{
      height: calc( 100% - 93px );
      overflow: hidden;
    }
    </style>