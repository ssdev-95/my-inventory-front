import React, { useContext } from 'react';
import { GetStaticProps } from 'next'
import { dbConnect, jsonify } from './api/mongodb'
import products from './api/product'

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

function Home({ products }: HomeProps) {
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
	dbConnect()
	const productList = await products.find({}).exec()

	let list = jsonify(productList).map(product=>{
		const { _id, expirateon, quantity, category, name} = product
		return {
			id: _id,
			name: name,
			category: category,
			quantity: quantity,
			expiration: expirateon,
		}
	})

	// products.create({name: 'shampoo', category: 'hygiene', quantity: 5, expirateon: 454505545})

	return {
		props: {
			products: list
		},
		revalidate: 60*60*3
	}
}

export default Home
