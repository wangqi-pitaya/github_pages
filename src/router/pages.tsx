import Layout from '../layout';
import {IRoute} from '.';

/**
 * 只对component属性配置的组件处理为懒加载，不想用懒加载的就用element属性配置组件
 */
const pages: IRoute[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        meta: {
          title: '首页',
        },
        children: [
          {
            path: '/home',
            redirect: '/home/index',
          },
          {
            path: '/home/index',
            component: () => import('../pages/Index'),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    component: () => import('../pages/404'),
  },
];

export default pages;
