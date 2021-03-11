<template>
  <div class="shop-info" v-if="Object.keys(shops).length!==0">
    <div class="shopName">
      <div class="shopLogo">
        <img :src="shops.logo" alt="">
      </div>
      <div class="name">
        {{shops.name}}
      </div>
    </div>
    <div class="shop-details">
      <div class="shop-details-left">
        <div class="shop-totalSales">
          <p class="goodsCount">{{shops.sells | sellCountFilter}}</p>
          <p class="explanation">总销量</p>
        </div>
        <div class="shop-totalSales">
          <p class="goodsCount">{{shops.goodsCount}}</p>
          <p class="explanation">全部宝贝</p>
        </div>
      </div>
      <div class="line"></div>
      <div class="shop-details-right">
        <ul class="shop-right-description" v-for="(item,index) in shops.score" :key="index">
          <li class="texts">{{ item.name }}</li>
          <li class="score" :class="{heightLight:item.isBetter}">{{ item.score }}</li>
          <li class="better">
            <span :class="{active:item.isBetter}">
              {{ item.isBetter?'高':'低' }}
            </span>
          </li>
        </ul>
    </div>
  </div>
    <div class="shop-intoStore">
      <a href="javascript:;">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
name: 'detailShopInfos',
  components: {},
  props: {
    shops:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    sellCountFilter(value){
      if (value > 10000) {
        return (value/10000).toFixed(1)+"万";
      }else{
        return value
      }
    }
  }
};
</script>
<style lang="less" scoped>
.shop-info{
  width: 100%;
  margin-top: 15px;
  padding: 5px;
  overflow: hidden;
  .shopName{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    .shopLogo{
      margin-right: 10px;
      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        vertical-align: middle;
      }
    }
    .name{
      line-height: 57px;
      color: #666;
    }
  }
  .shop-details{
    width: 100%;
    height: 30vh;
    display: flex;
    padding: 20px 10px 0;
    justify-content: space-between;
    .shop-details-left{
      display: flex;
      width: 50%;
      height: 50%;
      align-items: center;
      justify-content: space-around;
      .shop-totalSales{
        text-align: center;
        margin-left: 10px;
        font-weight: bold;
        font-size: 14px;
        .goodsCount{
          font-size: 18px;
          margin-bottom: 5px;
        }
      }

    }
    .line{
      width: 1px;
      height: 30%;
      margin-top: 3%;
      background-color: #666;
    }
    .shop-details-right{
      width: 50%;
      height: 60%;
      padding: 0 0 4% 4%;
      margin-top: -10px;
      box-sizing: border-box;
      .shop-right-description{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        text-align: left;
        .score{
          color: greenyellow;
          width: 20px;
        }
        .heightLight{
          color: red;
        }
        .better{
          background-color:greenyellow;
          color: #fff;
        }
        .active{
          background-color:red;
        }
      }
    }
  }
  .shop-intoStore{
    width: 80%;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    margin-top: -80px;
    border-radius: 10px;
    text-align: center;
    background-color: #eee;
    a{
      font-weight: bold;
      display: block;
    }
  }
}
</style>