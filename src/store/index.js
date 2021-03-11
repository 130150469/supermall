import Vue from 'vue'
import Vuex from 'vuex'

//1.注册插件
Vue.use(Vuex);


//2.创建store对象

const store = new Vuex.Store({
    state:{
        cartList:[],
    },
    mutations:{
       addCounter(state,playload){
         playload.count++;
       },
       addToCart(state,playload){
            state.cartList.push(playload)
       }
    },
    actions:{
        addCart(context,playload){
            //1.查找购物车数组是否有该商品
            let product = context.state.cartList.find(item => item.iid === playload.iid)
            //2.判断是否有该商品
            if(product){
                context.commit("addCounter",product);
            }else{
                playload.count = 1;
                context.commit("addToCart",playload)
            }
        },
    },
    modules:{

    }
})

//3.挂载到Vue实例上

export default store;