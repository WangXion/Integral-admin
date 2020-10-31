const pre = '/dashboard/';

export default {
    path: '/dashboard',
    title: '系统配置',
    header: 'home',
    custom: 'i-icon-demo i-icon-demo-dashboard',
    children: [
        {
            path: `${pre}console`,
            title: '权限管理'
        },
        {
            path: `${pre}monitor`,
            title: '角色设置'
        },
        {
            path: `${pre}workplace`,
            title: '系统日志'
        }
    ]
}
