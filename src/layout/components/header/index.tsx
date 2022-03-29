import styles from './style.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>PITAYA</div>
      <nav className={styles.nav}></nav>
      <div className={styles.other}></div>
    </header>
  )
}
