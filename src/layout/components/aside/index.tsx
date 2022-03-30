import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '@/router';
import styles from './style.module.css';

export default function Aside() {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const onGetAsideArr = () => {
    let asideArr: any[] = [];
    routes.forEach((item) => {
      if (item.path.indexOf(pathname.split('/')?.[1]) > -1) {
        asideArr = item?.children || [];
      }
    });
    return asideArr;
  }
  
  return (
    <aside className={styles.aside}>
      <ul>
        {onGetAsideArr().map((aside) => aside.title ?
          <li onClick={() => {navigate(aside.path)}} key={aside.path}>
            <span>{aside.title}</span>
          </li> : null)
        }
      </ul>
    </aside>
  )
}
