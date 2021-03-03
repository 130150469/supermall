<template>
      <div class="tab-bar-item" @click="itemClick">
          <slot v-if="!isActive" name="item-icon"></slot>
          <slot v-else name="item-icon-active"></slot>
          <div :style="activeStyle" ><slot name="item-text"></slot></div>
      </div>
  
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red',
        }
    },
    data(){
        return {
            //isActive:false,
        }
    },
    computed:{
        isActive(){
            // this.$route 判断当前活跃路由是否包含当前界面地址
            return this.$route.path.indexOf(this.path) > -1
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {color:'#666'}
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path)
        }
    }
}
</script>

<style>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 12px;
        color: #666;
        vertical-align: middle;
    }
  .tab-bar-item img{
      width:24px;
      height: 24px;
  }
</style>