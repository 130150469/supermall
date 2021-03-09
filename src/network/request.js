import axios from 'axios'

export function request(config){
    //1. 创建axios实例
    const instance = axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000
    })

    //2.1 axios拦截器  请求拦截的作用
    instance.interceptors.request.use(data =>{
        // data 代表config配置
        //console.log(data);
        //1.比如config的一些请求不符合服务器端的要求

        //2.比如每次发送网络请求的时候 希望显示一个请求的图标

        //3.某些网络请求必须携带一些必要的信息 比如登录token
        return data
    },err =>{
        console.log(err);
    })

    //2.2 响应拦截
    instance.interceptors.response.use(result => {
        // 返回的结果
        //console.log(result);
        return result.data;
    },err =>{
        console.log(err);
    })


    // 3.发送真正的网络请求
    return instance(config)
}
