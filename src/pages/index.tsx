import React, { useContext } from 'react';
import { GetServerSideProps } from 'next'
import { Controller } from '@/services/db/DBController'

import Head from 'next/head'
import Header from '@/components/Header'
import Dashboard from '@/components/Dashboard'
import Switcher from '@/components/ThemeSwitcher'
import AddModal from '@/components/Modals/AddProduct'
import EditModal from '@/components/Modals/EditProduct'
import Contact from '@/components/Modals/Contact'

import { AddProductModalContext } from '@/contexts/AddProductModalContext'
import { EditModalContext } from '@/contexts/EditModalContext'
import {ContactModalContext } from '@/contexts/ContactModalContext'

import { Container, Footer } from '@/styles/pages/home'

import { HomeProps } from '@/types'

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

export const getServerSideProps:GetServerSideProps = async () => {
	// const list = [
	// 	{
	// 		id: 'dd4gbgfdsd4g',
	// 		name: 'Salame',
	// 		category: 'food',
	// 		quantity: 550,
	// 		expiration: '2021-05-16',
	// 	}
	// ]

	const productos = await Controller.get()
	// console.log(process.env.NEXT_DB_COLLECTION)

	return {
		props: {
			products: productos
		}
	}
}

export default Home
