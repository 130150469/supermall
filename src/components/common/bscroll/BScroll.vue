<template>
<!-- 使用ref属性 确保找到的dom就是这个 -->
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
    name:"BScroll",
    data(){
        return {
            scroll:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false,
        }
    },
    mounted(){
        //1.创建BScroll对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad,
        })

        //2. 监听滚动的位置
        this.scroll.on('scroll',(position) => {
            this.$emit("scroll",position)
        })
        //3.上拉加载事件
        this.scroll.on("pullingUp",() => {
            this.$emit("pullingUp");
        })
    },
    methods:{
        finishPullUp(){
            this.scroll.finishPullUp();
        },
        refresh(){
            //console.log("aaa");
            this.scroll.refresh();
        },
        scrollTo(x, y, time=-1) {
            if(time < 0){
                this.scroll.scrollTo(x, y);
            }else{
                this.scroll.scrollTo(x,y,time);
            }

        },
    }
}
</script>

<style scoped>
    
</style>