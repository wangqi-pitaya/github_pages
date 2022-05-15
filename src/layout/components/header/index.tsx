import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '@/router';
import { urlWithParams } from '@/utils';
import './index.scss';

export default function Header() {
	const navigate = useNavigate();
	const localtion = useLocation();
	const { pathname } = localtion;
	const genPath = useMemo(() => `/${pathname.split('/')?.[1]}`, [pathname]);

	const onNavLink = (route: any) => {
		if (genPath === route.path) return;
		navigate(urlWithParams(route.path));
	};

	const renderNav = () => {
		const navList = routes?.[0]?.['children']?.filter((item) => item.meta?.title) || [];
		
		return (
			<nav className="nav">
				{navList.map((item) => (
					<div className="text" onClick={() => {onNavLink(item)}} key={item.path}>
						<span>{item?.meta?.title}</span>
					</div>
				))}
				
			</nav>
		)
	}
	

	return (
		<div className="header">
			<div className="logo">
				PITAYA
			</div>
			{renderNav()}
		</div>
	);
}
