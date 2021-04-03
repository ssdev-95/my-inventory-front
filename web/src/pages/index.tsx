import styles from '../styles/pages/Home.module.css'

import {useContext} from 'react';
import { Menu } from '../components/Menu';
import { Content } from '../components/Content';
import { AddProductModal } from '../components/AddProductModal';
import { AddProductModalContext } from '../contexts/AddProductModalContext';
import { ContactModal } from '../components/ContactModal';
import { LoginModal } from '../components/LoginModal';

export default function Home() {
  const { openCloseAddProductModal } = useContext(AddProductModalContext)
  /*LOL*/
  return (
    <div className={styles.container}>
        <AddProductModal />
        <ContactModal />
        <LoginModal />
        <header>
            <img src="drawable/app_logo.png" alt="App logo"/>
            <Menu className={'about'}/>
        </header>

        <hr />

        <main className={styles.main}>
          <Content className={styles.content} />
        </main>

        <img src="drawable/add_button.png" 
            className={styles.addButton} 
            alt="Add button"
            onClick={openCloseAddProductModal}/>

        <hr />

        <footer className={styles.footer}>
        </footer>
      </div>
  )
}
