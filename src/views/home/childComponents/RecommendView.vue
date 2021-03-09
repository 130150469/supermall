<template>
  <div class="recommend">
      <div v-for="(item,index) in recommend" :key="index" class="recommendItem">
          <a :href="item.link">
              <img :src="item.image">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:"RecommendView",
    props:{
        recommend:{
            type:Array,
            default(){
                return [];
            }
        }
    }
}
</script>

<style scoped>
    .recommend{
        display: flex;
        text-align: center;
        width: 100%;
        padding-top: 10px;
        padding-bottom: 30px ;
        border-bottom: 10px solid #eee;
    }
    .recommendItem{
        flex: 1;
    }
    .recommendItem img{
        width: 90%;
        margin-bottom: 10px;
    }
</style>