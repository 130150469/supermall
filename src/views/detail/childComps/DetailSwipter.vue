<template>
  <div class="detail-swipter">
      <swiper class="swipers">
          <swiper-item v-for="item in topImages" :key="item">
              <img :src="item" alt="">
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    name:"DetailSwipter",
    props:{
        topImages:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    components:{
        Swiper,
        SwiperItem,
    },
   
}
</script>

<style scoped>
    .swipers{
        height: 300px;
        overflow: hidden;
    }
</style>