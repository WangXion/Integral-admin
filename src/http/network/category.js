import { request } from './request'

export function getcategory(){
    return request({
        url: '/category'
    }).catch(err => err)
}

export function getSubcategory(maitKey=3627){
    return request ({
        url: '/subcategory',
        params:{
            maitKey
        }
    }).catch(err => err)
}

export function getcategoryDetail(miniWallkey,type){
    return request ({
        url: "/subcategory/detail",
        params:{
            miniWallkey,
            type
        }
    }).catch(err => err)
}