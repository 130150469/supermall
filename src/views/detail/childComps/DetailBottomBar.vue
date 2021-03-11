<template>
  <div id="bottom-bar">
      <div class="left">
          <span>
              <img src="~assets/img/common/back.svg" alt=""/>
              客服
          </span>
          <span>
              <img src="~assets/img/common/back.svg" alt=""/>
              店铺
          </span>
          <span>
              <img src="~assets/img/common/back.svg" alt=""/>
              收藏
          </span>
      </div>
      <div class="right">
          <div class="getCart" @click="addToCart">
                加入购物车
          </div>
          <div class="purchase">
              购买
          </div>
      </div>
  </div>
</template>

<script>
export default {
name: 'bottom-bar',
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {
      addToCart(){
        this.$emit("addCart")
      }
  },
  created() {},
  mounted() {}
};
</script>
<style  scoped>
#bottom-bar {
  position: fixed;
  z-index: 10;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: red;
  display: flex;
  text-align: center;
  font-size: 12px;
}
.left{
    flex: 1;
    display: flex;
    background-color: #fff;
}
.left > span {
    flex:1;
}
.left img {
    display: block;
    margin: 5px auto;
}
.right{
    flex:1;
    display: flex;
}
.right >div{
    flex: 1;
    line-height: 50px;
}
.getCart{
    background-color: darkgoldenrod;
}
.purchase{
    background-color:var(--color-high-text);
    color: #fff;
}
</style>