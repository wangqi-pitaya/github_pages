import { useNavigate } from 'react-router-dom';
import { routes } from '@/router';
import { urlWithParams } from '@/utils';
import styles from './style.module.css';

export default function Header() {
  const navigate = useNavigate();
  const onPushIndex = () => {
    navigate(urlWithParams('/index'));
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={onPushIndex}>PITAYA</div>
      <nav className={styles.nav}>
        <ul>
          {routes.map((route: any) => (route.title ?
            <li onClick={() => {navigate(urlWithParams(`${route.path}`))}} key={route.path}>
              <span>{route.title}</span>
            </li> : null
          ))}
        </ul>
      </nav>
      <div className={styles.other}></div>
    </header>
  )
}
