<template>
  <div class="goods-item" @click="itemClick">
      <!-- load函数监听图片加载完成 -->
      <img :src="goodsItem.show.img" alt="" @load="imgLoad">
      <div class="goods-info">
          <p>{{goodsItem.title}}</p>
          <span class="price">{{goodsItem.price}}</span>
          <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"GoodsListItem",
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {};
            }
        }
    },
    methods:{
        imgLoad(){
            // 事件总线 发射事件到vuex 
            this.$bus.$emit("itemImgLoad");
        },
        itemClick(){
            this.$router.push("/detail/" + this.goodsItem.iid)
        }
    }
}
</script>

<style scoped>
   .goods-item{
       padding-bottom: 40px;
       position: relative;
       width: 48%;
   }
   .goods-item img{
       width: 100%;
       border-radius: 5px;
       border: 2px solid var(--color-tint);
   }
   .goods-info{
       text-align: center;
       font-size: 12px;
       position: absolute;
       left: 0;
       right: 0;
       bottom: 5px;
   }
   .goods-info p{
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
       margin-bottom: 3px;
   }
   .goods-info .price{
       color:var(--color-high-text);
       margin-right: 20px;
   }
   .goods-info .collect{
       position: relative;
   }

   .goods-info .collect::before{
        content: '';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
   }
</style>