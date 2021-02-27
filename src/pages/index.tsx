import styles from '../styles/Home.module.css'

import { Menu } from '../components/Menu';
import { Section } from '../components/Section';

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
          <img src="drawable/app_logo.png" alt="App logo"/>
          <Menu />
      </header>

      <hr />

      <main className={styles.main}>
        <Section className='food' />
        <Section className='hygiene' />
        <Section className='cleaning' />
      </main>

      <img src="drawable/add_button.png" className={styles.addButton} alt="Add button"/>

      <hr />

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
