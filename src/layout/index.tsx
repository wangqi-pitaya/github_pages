import {Outlet} from 'react-router-dom';
import {Layout} from 'antd';
import {Header, Footer, Sider} from './components';
import styles from './style.module.css';

export default function LayoutWrap() {
  return (
    <Layout className={styles.wrap}>
      <Header />
      <Layout>
        <Sider />
        <Layout>
          <div className={styles.articles}>
            <Outlet />
          </div>
          <Footer></Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
