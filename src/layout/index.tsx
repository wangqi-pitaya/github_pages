import { Outlet } from 'react-router-dom';
import { Header, Footer, Aside } from './components';
import styles from './style.module.css';

export default function LayoutWrap() {
  return (
    <div className={styles.wrap}>
      <Header />
      <section className={styles.content}>
        <Aside />
        <article className={styles.article}>
          <Outlet />
        </article>
      </section>
      <Footer />
    </div>
  )
}
