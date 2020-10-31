const pre = '/list/';

export default {
    path: '/list',
    title: '运营管理',
    header: 'home',
    custom: 'i-icon-demo i-icon-demo-list',
    children: [
        {
            path: `${pre}basic-list`,
            title: 'Banner图'
        },
        {
            path: `${pre}card-list`,
            title: '新闻管理'
        },
        // {
        //     path: `${pre}user-list`,
        //     title: '用户列表'
        // },
        {
            path: `${pre}goods-list`,
            title: '联系我们'
        },
        {
            path: `${pre}table-list`,
            title: '实施方案'
        }
    ]
}
