import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { routes } from '@/router';
import './index.scss';

const { Sider: AntdSider } = Layout;

export default function Sider() {
	const localtion = useLocation();
	const { pathname } = localtion;
	const genPath = useMemo(() => `/${pathname.split('/')?.[1]}`, [pathname]);
	const siderList = useMemo(
		() => (
			routes?.
			[0]?.
			['children']?.
			find(item => item.path === genPath && item?.children)?.
			children?.
			filter(item => item?.meta?.title) || []
		), [genPath]
	);
	if (siderList.length === 0) return null;

	return (
		<AntdSider className="aside" theme="light">
			<Menu defaultSelectedKeys={['0']}>
				{siderList.map(item => {
					
					return (
						<Menu.Item
							onClick={() => {}}
							key={item.path}
						>
							<span>{item.meta?.title}</span>
						</Menu.Item>
					)
				})}
				
			</Menu>
		</AntdSider>
	);
}
