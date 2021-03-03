<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img src="~assets/img/tabbar/home.svg"  alt="" slot="item-icon" />    
        <img src="~assets/img/tabbar/homeActive.svg"  alt="" slot="item-icon-active" />  
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="green">
        <img src="~assets/img/tabbar/category.svg"  alt="" slot="item-icon" />  
        <img src="~assets/img/tabbar/categoryActive.svg"  alt="" slot="item-icon-active" />  
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <img src="~assets/img/tabbar/cart.svg"  alt="" slot="item-icon" />    
        <img src="~assets/img/tabbar/cartActive.svg"  alt="" slot="item-icon-active" />  
        <div slot="item-text" activeColor="blue">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/account" activeColor="skyblue">
        <img src="~assets/img/tabbar/account.svg"  alt="" slot="item-icon" />  
        <img src="~assets/img/tabbar/accountActive.svg"  alt="" slot="item-icon-active" />  
        <div slot="item-text" >个人</div>
      </tab-bar-item>
    </tab-bar>
  
</template>
<script>
import TabBar from 'components/common/tabBar/TabBar'
import TabBarItem from 'components/common/tabBar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
  
</style>
