import React, { useContext } from 'react';
import { GetStaticProps } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import Switcher from '../components/ThemeSwitcher'
import AddModal from '../components/Modals/AddProduct'
import EditModal from '../components/Modals/EditProduct'
import Contact from '../components/Modals/Contact'

import { AddProductModalContext } from '../contexts/AddProductModalContext'
import { EditModalContext } from '../contexts/EditModalContext'
import {ContactModalContext } from '../contexts/ContactModalContext'

import { Container, Footer } from '../styles/pages/home'

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
	const { isAddModalOpen } = useContext(AddProductModalContext)
	const { isEditModalOpen } = useContext(EditModalContext)
	const { isContactModalOpen } = useContext(ContactModalContext)
	
	return (
		<>
			<Head>
				<title>Home | My Inventory&trade;</title>
			</Head>

			{ isAddModalOpen && <AddModal /> }
			{ isEditModalOpen && <EditModal /> }
			{ isContactModalOpen && <Contact /> }
			
			<Container>
				<Header pathA="about" pathB="login" />
				<Dashboard products={products} />
				<Footer>
					<Switcher />
				</Footer>
			</Container>
		</>
	)
}

export const getStaticProps:GetStaticProps = async () => {
	let list = []

	const productList = [
		{
			id: 'sjddbrytveqcwewrert',
			name: 'salame',
			quantity: 550,
			category: 'food',
			expiration: Date.now()
		},
		{
			id: 'evrdrerc4rb44yfd4',
			name: 'salame',
			quantity: 550,
			category: 'food',
			expiration: Date.now()
		},
		{
			id: 'dvbnttwenrnyjmjjf54',
			name: 'shampoo',
			quantity: 12,
			category: 'hygiene',
			expiration: Date.now()
		},
		{
			id: 'brbrerermmgyrtyt4',
			name: 'condicionador',
			quantity: 12,
			category: 'hygiene',
			expiration: Date.now()
		},
		{
			id: 'crtht4y4hrehr444',
			name: 'sabao em po',
			quantity: 5,
			category: 'cleaning',
			expiration: Date.now()
		},
		{
			id: 'asrrtryhnavhnkvret',
			name: 'agua sanitaria',
			quantity: 10,
			category: 'cleaning',
			expiration: Date.now()
		}
	]
	
	return {
		props: {
			products: productList
		},
		revalidate: 60*60*3
	}
}
