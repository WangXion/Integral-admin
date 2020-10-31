import BasicLayout from '@/layouts/basic-layout';
import news from '../../pages/list/card-list/news/news'

const meta = {
    auth: true
};

const pre = 'list-';

export default {
    path: '/list',
    name: 'list',
    redirect: {
        name: `${pre}basic-list`
    },
    meta,
    component: BasicLayout,
    children: [
        {
            path: 'basic-list',
            name: `${pre}basic-list`,
            meta: {
                ...meta,
                title: 'Banner图'
            },
            component: () => import('@/pages/list/basic-list')
        },
        {
            path: 'card-list',
            name: `${pre}card-list`,
            meta: {
                ...meta,
                title: '新闻管理'
            },
            component: () => import('@/pages/list/card-list'),
        },
        // {
        //     path: 'user-list',
        //     name: `${pre}user-list`,
        //     meta: {
        //         ...meta,
        //         title: '用户列表'
        //     },
        //     component: () => import('@/pages/list/user-list')
        // },
        {
            path: 'goods-list',
            name: `${pre}goods-list`,
            meta: {
                ...meta,
                title: '联系我们'
            },
            component: () => import('@/pages/list/goods-list')
        },
        {
            path: 'table-list',
            name: `${pre}table-list`,
            meta: {
                ...meta,
                title: '实施方案'
            },
            component: () => import('@/pages/list/table-list')
        }
    ]
};
