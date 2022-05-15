import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Header, Sider } from './components';
import './index.scss';

export default function LayoutWrap() {
	return (
		<Layout className="wrap">
			<Header />
			<Layout>
				<Sider />
				<Layout>
					<div className="articles">
						<Outlet />
					</div>
				</Layout>
			</Layout>
		</Layout>
	);
}
