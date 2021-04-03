import styles from '../../styles/pages/Home.module.css'
import stylos from '../../styles/pages/About.module.css'

import { Menu } from '../../components/Menu';
import { ContactModal } from '../../components/ContactModal';
//import { UserLoginModal } from '../../components/UserLoginModal';
//import { UserLoginModalContext } from '../contexts/UserLoginModalContext';

export default function About() {
  //const { openCloseUserLoginModal } = useContext(UserLoginModalContext)
  //<UserLoginModal />

  return (
      <div className={styles.container}>
        
        <header>
            <img src="drawable/app_logo.png" alt="App logo"/>
            <Menu className={'home'} />
            <ContactModal />
        </header>

        <hr />

        <main className={stylos.content}>
          <h1>A letter from Dev Team</h1>
          <h2>What is MyDispensa?</h2>
          <p>Is an web based aplication to handle kitchens and/or storages with one click.</p>
          <h2>What can i do with MyDispensa?</h2>
          <p>You can add, delete or edit(feature not available at the time) products data, such as it's name, quantity and expiration date</p>
          <h2>What about the future?</h2>
          <p>In the future, we're plainning to add more features, such as dark theme, cloud storage, and more..</p>
          <h3>A hug from the Dev Team!</h3>
        </main>

        <hr />

        <footer className={styles.footer}>
        </footer>
      </div>
  )
}
