import Vue from 'vue';
import iView from 'iview';
import {router} from '../router/index';
import {appRouter} from '../router/router';
import store from '../store';
import App from '../app.vue';
import qs from 'qs';
import axios from 'axios';
import { Message } from 'iview';
import utils from './util';
import Cookies from 'js-cookie';

 const vm=new Vue({
    router: router,
    store: store,
    render: h => h(App),
    data: {
        currentPageName: '',
    },
    mounted () {
        this.currentPageName = this.$route.name;

        // 显示打开的页面的列表
        this.$store.commit('setOpenedList');
        this.$store.commit('initCachepage');
        // 权限菜单过滤相关
        this.$store.commit('updateMenulist');
        // iview-admin检查更新
        // util.checkUpdate(this);
    },
    created () {
        let tagsList = [];
        appRouter.map((item) => {
            if (item.children.length <= 1) {
                tagsList.push(item.children[0]);
            } else {
                tagsList.push(...item.children);
            }
        });
        this.$store.commit('setTagsList', tagsList);
    }
});
let baseUrl = axios.defaults.baseURL+'admin_api/';
//baseUrl  设置成你自己的请求地址哦


const CancelToken = axios.CancelToken;
const source = CancelToken.source();
//设置token
function setToken() {
    if (Cookies.get('admin_access_token')) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + Cookies.get('admin_access_token');
    }
}

//请求验证拦截器
axios.interceptors.request.use(config => {
    // store.commit('UPDATE_LOADING', true); //显示loading,这里没有用vuex可以省去
    //判断请求不是登陆接口的时候,字段是不是过期了,(根据业务逻辑做对应的处理)
    if (config.url.indexOf('login') < 0) {
        let lessTime = Number(Cookies.get('expireTime')) - Date.now(); //后台返回的过期时间与现在的进行计算
        if (lessTime <= 0) {
            Message.error({
                content: '登陆过期',
                duration: 5
            });
            source.token('token过期了');
            store.commit('UPDATE_LOADING', false); //隐藏loading
            window.location.href = '/login';
            Cookies.clear();
        }
    }
    return config;
});
//返回数据拦截器
axios.interceptors.response.use(res => {
    if (res.config.url.indexOf('login') >= 0) {
        const { token, expireTime, code, data } = res.data;
        if (code == '200') {
            //登陆后做出一些本地的处理，按需加载,()
            //...................
            Cookies.set('expireTime', expireTime); //过期时间
            Cookies.set('token', token);
        }
    }
    return res;
});

//封装请求方法（put,post,delete）
function formatReq(type, url, data) {
    setToken();
    return new Promise((reslove, reject) => {
        axios({
            method: type,
            url: `${baseUrl}${url}`,
            headers: {
                'content-Type': 'application/json'
            },
            cancelToken: source.token,
            data:JSON.stringify(data)
        })
            .then(r => {
                 if(r.status === 200 && r.data.errcode === 0){
                    //请求成功操作
                }else if(r.status===200 && r.data.errcode===-999){
                   //请求失败操作
                    }
                }
                reslove(r);
            })
            .catch(e => {
                Message.error(e.message);
            });
    }
//封装get 方法
const Http = {
    get: (url,query) => {
        url=utils.formatUrl(url,query);
        setToken();
        return new Promise((resolve, reject) => {
            axios.get(`${baseUrl}${url}`, { cancelToken: source.token })
            // .then(r => r)
                .then(r => {
                    if(r.status==200){
                        if(r.data.errcode===0){
                            //  请求成功操作
                        }
                    }

                    resolve(r);
                })
                .catch(e => {
                    // reject(e.message);
                    Message.error(e.message);
                })
        })
    },
    post: (url, data) => formatReq('post', url, data),
    put: (url, data) => formatReq('put', url, data),
    patch: (url, data) => formatReq('patch', url, data),
    delete: (url, data) => formatReq('delete', url, data)
};

export default Http;