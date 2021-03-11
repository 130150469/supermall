<template>
    <div  v-if="Object.keys(goods).length !== 0" class="base-info">
       <div class="info-title"> {{goods.title}}</div>
       <div class="info-price">
           <span class="n-price">{{goods.newPrice}}</span>
           <span class="o-price">{{goods.oldPrice}}</span>
           <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
       </div>
       <div class="info-other">
           <span>{{goods.columns[0]}}</span>
           <span>{{goods.columns[1]}}</span>
           <span>{{goods.services[goods.services.length-1].name}}</span>
       </div>
       <div class="info-services">
           <span class="info-services-item" v-for="(item,index) in goods.services.length-1" :key="index">
                <img :src="goods.services[index].icon" alt="">
                <span>{{goods.services[index].name}}</span>
           </span>
       </div>
    </div>
  
</template>

<script>
export default {
    name:"DetailBaseInfo",
    props:{
        goods:{
            type:Object,
            default:{},
        }
    },
}
</script>

<style scoped>
    .info-title{
        padding:10px;
        color:black;
    }
    .info-other{
        display: flex;
        font-size: 12px;
        padding: 15px 5px;
        border-bottom: 2px solid #ccc;
        justify-content: space-between;
    }
    .info-price>span{
        display: inline-block;
    }
    
    .n-price{
        font-size: 30px;
        color: var(--color-high-text);
        margin-right: 5px;
    }
    .o-price{
        text-decoration-line: line-through;
    }
    .discount{
        color: #fff;
        background-color: var(--color-high-text);
        border-radius:8px;
        padding:3px;
        font-size: 12px;
        position: relative;
        top: -12px;
    }

    .info-services{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        padding: 5px;
        padding-bottom: 20px;
        font-size: 12px;
        border-bottom: 5px solid #ddd;
    }
    .info-services-item > img{
        width: 15px;
        height: 15px;
    }
</style>