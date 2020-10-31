const pre = '/search/';

export default {
    path: '/search',
    title: '积分管理',
    header: 'home',
    custom: 'i-icon-demo i-icon-demo-search',
    children: [
        {
            path: `${pre}search-article`,
            title: '积分待审核'
        },
        {
            path: `${pre}search-apps`,
            title: '积分明细'
        },
        {
            path: `${pre}table-list`,
            title: '积分公示'
        },
        {
            path: `${pre}basic-list`,
            title: '积分申述'
        },
        {
            path: `${pre}basic-chang`,
            title: '积分产品'
        },
        {
            path: `${pre}table-duihuan`,
            title: '积分产品兑换记录'
        },
        {
            path: `${pre}search-projects`,
            title: '积分细则'
        },

    ]
}
