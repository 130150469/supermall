<template>
  <div>
      <nav-bar >
          <div slot="left" @click="imgClick">
            <img src="~assets/img/common/back.svg" alt="没有显示图片的时候显示文字"  class="back">
          </div>
          <div slot="center"  class="title">
              <div v-for="(item,index) in titles " :key="item" class="titleItem" @click="titleClick(index)" :class="{choiceItem:currentIndex == index}">
                    {{item}}
              </div>
          </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar.vue'
export default {
    name:"DetailNavBar",
    data(){
        return {
            titles:["商品","参数","评论","推荐"],
            currentIndex:0
        }
    },
    components: { 
        NavBar,
    },
    methods:{
        titleClick(index){
            this.currentIndex = index;
        },
        imgClick(){
            this.$router.back();
        }
    }
}
</script>

<style scoped>
    .title{
        display: flex;
    }
    .titleItem{
        flex: 1;
        font-size: 12px;
    }
    .choiceItem{
        color:var(--color-high-text)
    }
    .back{
        margin-left: 15px;
        margin-top: 10px;
    }
</style>