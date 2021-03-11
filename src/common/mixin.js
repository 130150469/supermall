import BackTop from 'components/common/backtop/BackTop.vue';
export const backTopMixin = {
    data(){
        return {
            isShowBackTop:false,
        }
    },
    methods:{
        btnClick(){
            this.$refs.scroll.scroll.scrollTo(0,0,500)
        },
    },
    components:{
        BackTop
    }
}