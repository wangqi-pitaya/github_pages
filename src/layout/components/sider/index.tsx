import { useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { routes } from '@/router';
import './index.scss';

const { Sider: AntdSider } = Layout;

export default function Sider() {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const onGetSiderArr = () => {
		let asideArr: any[] = [];
		routes.forEach((item) => {
			if (item.path.indexOf(pathname.split('/')?.[1]) > -1) {
				asideArr = item?.children || [];
			}
		});
		return asideArr;
	};

	if (onGetSiderArr().length === 0) return null;

	return (
		<AntdSider className="aside" theme="light">
			<Menu defaultSelectedKeys={['0']}>
				{onGetSiderArr().map((aside) =>
					aside.title ? (
						<Menu.Item
							onClick={() => {
								navigate(aside.path);
							}}
							key={aside.path}
						>
							<span>{aside.title}</span>
						</Menu.Item>
					) : null,
				)}
			</Menu>
		</AntdSider>
	);
}
