<template>
  <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
            <a :href="item.link">
              <img :src="item.image" alt="" @load="imgLoad"/>
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    name:"HomeSwiper",
    props:{
        banners:{
            type:Array,
            default(){
                return [];
            }
        },
        data(){
            return {
                isLoad:{
                    type:Boolean,
                    default:false,
                }
            }
        }
    },
    methods:{
        imgLoad(){
            if(!this.isLoad){
                this.isLoad = true;
                this.$emit("SwipterImgLoad")
            }
            
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style>

</style>