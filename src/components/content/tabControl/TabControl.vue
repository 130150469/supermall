<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles" :key="index" class="tab-control-item" @click="changeIndex(index)">
          <span :class="{isActive:index == currentIndex}">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"TabControl",
    data(){
        return {
            currentIndex : 0,
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    methods:{
        changeIndex(index){
            this.currentIndex = index;
            this.$emit("tabClick",index);
        }
    }
}
</script>

<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
        z-index: 100;
    }
    .tab-control-item{
        flex: 1;
    }

    .isActive{
        border-bottom: 2px solid var(--color-tint);
        color:var(--color-high-text);
        padding: 5px;
    }
</style>