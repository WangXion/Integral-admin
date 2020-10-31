import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'search-';

export default {
    path: '/search',
    name: 'search',
    redirect: {
        name: `${pre}search-article`
    },
    meta,
    component: BasicLayout,
    children: [
        {
            path: 'search-article',
            name: `${pre}search-article`,
            meta: {
                ...meta,
                title: '积分待审核'
            },
            component: () => import('@/pages/search/search-article')
        },
        {
            path: 'search-apps',
            name: `${pre}search-apps`,
            meta: {
                ...meta,
                title: '积分明细'
            },
            component: () => import('@/pages/search/search-apps')
        },
        {
            path: 'table-list',
            name: `${pre}table-list`,
            meta: {
                ...meta,
                title: '积分公示'
            },
            component: () => import('@/pages/search/table-list')
        },
        {
            path: 'basic-list',
            name: `${pre}basic-list`,
            meta: {
                ...meta,
                title: '积分申述'
            },
            component: () => import('@/pages/search/basic-list')
        },
        {
            path: 'basic-chang',
            name: `${pre}basic-chang`,
            meta: {
                ...meta,
                title: '积分产品'
            },
            component: () => import('@/pages/search/basic-chang')
        },
        {
            path: 'table-duihuan',
            name: `${pre}table-duihuan`,
            meta: {
                ...meta,
                title: '积分产品兑换记录'
            },
            component: () => import('@/pages/search/table-duihuan')
        },
        {
            path: 'search-projects',
            name: `${pre}search-projects`,
            meta: {
                ...meta,
                title: '积分细则'
            },
            component: () => import('@/pages/search/search-projects')
        }

    ]
};
