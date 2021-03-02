import styles from '../styles/Home.module.css'

import {useContext} from 'react';
import { Menu } from '../components/Menu';
import { Content } from '../components/Content';
import { AddProductModal } from '../components/AddProductModal';
import { AddProductModalContext } from '../contexts/AddProductModalContext';

export default function Home() {
  const { openCloseAddProductModal } = useContext(AddProductModalContext)

  return (
      <div className={styles.container}>
        <AddProductModal />
        <header>
            <img src="drawable/app_logo.png" alt="App logo"/>
            <Menu />
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