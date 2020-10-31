// 菜单，侧边栏
import dashboard from './modules/dashboard';
import form from './modules/form';
import list from './modules/list';
import search from './modules/search';
import tool from './modules/tool';
// 系统
import log from './modules/log';

export default [
    dashboard,
    form,
    list,
    search,
    tool,
    {
        path: '/i18n',
        title: '$t:menu.i18n',
        header: 'home',
        custom: 'i-icon-demo i-icon-demo-i18n'
    },
    log
];
