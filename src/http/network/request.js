import axios from 'axios'

export function request (config){
    // 1.创建axios实例对象
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/n3',
        timeout: 5000
    })

    // 2.axios（网络）请求拦截器
    // 拦截的作用
    // 2.1拦截一些config里没有用的信息
    // 2.2每次发送网络请求等待时，有需求需要在界面中显示等待图标
    // 2.3某些网络请求需要携带一些特殊的信息如(token)
    instance.interceptors.request.use( config => {
        return config
    }, err => {
        console.log(err)
    })

    //响应拦截器
    instance.interceptors.response.use( res => {
        return res
    }), err => {
        console.log(err)
    }

    // 3.发送真正的网络请求
    return instance(config);  

}