import styles from '../styles/pages/Home.module.css'

import { useContext, useEffect } from 'react';
import { GetStaticProps } from 'next'

import { Menu } from '../components/Menu';
import { Content } from '../components/Content';
import { AddProductModal } from '../components/AddProductModal';
import { AddProductModalContext } from '../contexts/AddProductModalContext';
import { ContactModal } from '../components/ContactModal';
import { LoginModal } from '../components/LoginModal';

import { DBController } from './_api/DatabaseController'

interface Product {
	id: string;
	name: string;
	category: string;
	quantity: number;
	expiration: number;
}

interface HomeProps {
	products: Product[];
}

export default function Home({ products }: HomeProps) {
	const { openCloseAddProductModal } = useContext(AddProductModalContext)

	useEffect(() => {
        if(products.length>0) {
            localStorage.setItem('@app/products',JSON.stringify(products))
        }
    }, [])
	
	return (
		<div className={styles.container}>
			<AddProductModal />
			<ContactModal />
			<LoginModal />
			<header>
				<img src="drawable/app_logo.png" alt="App logo" />
				<Menu className={'about'} />
			</header>

			<hr />

			<main className={styles.main}>
				<Content className={styles.content} />
			</main>

			<img src="drawable/add_button.png"
				className={styles.addButton}
				alt="Add button"
				onClick={openCloseAddProductModal} />

			<hr />

			<footer className={styles.footer}>
			</footer>
		</div>
	)
}

export const getStaticProps:GetStaticProps = async () => {
	const products = DBController.get()

	return {
		props: {
			products
		}
	}
}
