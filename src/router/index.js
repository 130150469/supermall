import Vue from 'vue'
import VueRouter from 'vue-router'


//2.创建router

const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Account = () => import('views/account/Account')
const Category = () => import('views/category/Category')
const Detail = () =>  import('views/detail/Detail')

Vue.use(VueRouter)
const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:"/cart",
        component:Cart,
    },
    {
        path:'/category',
        component:Category,
    },
    {
        path:'/account',
        component:Account,
    },
    {
        path:'/detail/:iid', //动态路由
        component:Detail
    }
]

const router = new VueRouter({
    routes,//这里一定是routes 各位爹 唉。。
    mode:'history',
});


//3.导出router

export default router