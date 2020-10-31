const pre = '/form/';

export default {
    path: '/form',
    title: '用户管理',
    header: 'home',
    custom: 'i-icon-demo i-icon-demo-form',
    children: [
        {
            path: `${pre}basic-form`,
            title: '村民管理',
        },
        {
            path: `${pre}advanced-form`,
            title: '认证用户',
        },
  
  
        {
            path: `${pre}detail`,
            title: '未认证用户'
        },
       
    ]
}
