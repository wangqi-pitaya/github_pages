import Layout from '../layout';

export * from './routerGuard';

/**
 * 只对component属性配置的组件处理为懒加载，不想用懒加载的就用element属性配置组件
 */
export const routes = [
  {
    path: '/',
    component: () => import('../pages/Index'),
  },
  {
    path: '/entry',
    redirect: '/entry/home',
  },
  {
    path: '/entry',
    element: <Layout />,
    children: [
      {
        path: '/entry/home',
        component: () => import('../pages/Home'),
        meta: {
          title:'Home',
        }
      },
      {
        path: '/entry/list',
        component: () => import('../pages/List'),
      },
      {
        path: '/entry/detail',
        component: () => import('../pages/Detail'),
      },
    ]
  },
  {
    path: '*',
    component: () => import('../pages/404'),
  }
];

export function onRouteBefore({ pathname, meta }: any) {
  if (meta.title !== undefined) {
    document.title = meta.title;
  }
  if (meta.needLogin) {
    return '/login'
  }
}