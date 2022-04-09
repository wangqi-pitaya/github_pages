import { useNavigate } from 'react-router-dom';
// import { routes } from '@/router';
import { urlWithParams } from '@/utils';
import styles from './style.module.css';

export default function Header() {
	const navigate = useNavigate();

	const onPushIndex = () => {
		navigate(urlWithParams('/home'));
	};

	const onPushDoc = () => {
		navigate(urlWithParams('/doc'));
	};

	return (
		<div className={styles.header}>
			<div className={styles.logo} onClick={onPushIndex}>
				PITAYA
			</div>
			<nav className={styles.nav}>
				<div className={styles.text} onClick={onPushDoc}>
					<span>文档</span>
				</div>
			</nav>
		</div>
	);
}
