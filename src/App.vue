<template>
  <div id="app">
    <!-- 保持当前组件不被销毁 不包括Detail子组件 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar/MainTabBar'


export default {
  name: 'App',
  components:{
    MainTabBar,
   
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
