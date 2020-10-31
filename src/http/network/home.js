import {request} from './request'

//封装一个关于home组件的网络请求模板便于管理
export function getHomerequest(){
    return request({
        url: '/home/multidata'
    })
}

export function getHomeGoods(type,page){
    return request ({
        url: "/home/data",
        params:{
            type,
            page
        }
    })
}