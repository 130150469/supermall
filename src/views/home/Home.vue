<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import {getMultiData} from 'network/home'

export default {
  name:"Home",
  components:{
    NavBar
  },
  data(){
    return {
      banners:[],
      recommend:[],
    }
  },
  created(){
    //1.请求多个数据
    getMultiData().then(res => {
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
    .home-nav{
      background-color: var(--color-tint);
      color:#fff;
    }
</style>