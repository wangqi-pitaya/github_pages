import { useNavigate } from 'react-router-dom';
// import { routes } from '@/router';
import { urlWithParams } from '@/utils';
import './index.scss';

export default function Header() {
	const navigate = useNavigate();

	const onPushIndex = () => {
		navigate(urlWithParams('/home'));
	};

	const onPushDoc = () => {
		navigate(urlWithParams('/doc'));
	};

	return (
		<div className="header">
			<div className="logo" onClick={onPushIndex}>
				PITAYA
			</div>
			<nav className="nav">
				<div className="text" onClick={onPushDoc}>
					<span>文档</span>
				</div>
			</nav>
		</div>
	);
}
