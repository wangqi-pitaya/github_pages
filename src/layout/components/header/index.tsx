import {useNavigate} from 'react-router-dom';
import {Layout, Menu} from 'antd';
import {routes} from '@/router';
import {urlWithParams} from '@/utils';
import styles from './style.module.css';

const {Header: AntdHeader} = Layout;

export default function Header() {
  const navigate = useNavigate();
  const onPushIndex = () => {
    navigate(urlWithParams('/index'));
  };

  const onClickNav = ({key}: { key: string }) => {
    navigate(urlWithParams(key));
  };

  return (
    <AntdHeader>
      <div className={styles.logo} onClick={onPushIndex}>PITAYA</div>
      <Menu
        theme="dark"
        mode='horizontal'
        defaultSelectedKeys={['0']}
        onClick={onClickNav}
      >
        {routes.map((route: any) => (route.title ?
          <Menu.Item key={route.path}>
            <span>{route.title}</span>
          </Menu.Item> : null
        ))}
      </Menu>
    </AntdHeader>
  );
}
