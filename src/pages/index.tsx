import styles from '../styles/Home.module.css'

import { Menu } from '../components/Menu';

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
          <img src="drawable/app_logo.png" alt="App logo"/>
          <Menu />
      </header>

      <hr />

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
