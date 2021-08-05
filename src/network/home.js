import {request} from './request'

export function getMultiData(){
    return request({
        url:"http://152.136.185.210:7878/api/m5/home/multidata",
    })
}

export function getHomeGoods(type,page){
    return request({
        url:"http://152.136.185.210:7878/api/m5/home/data",
        params:{
            type:type,
            page:page,
        }
    })
}

