import React, { useContext } from 'react';
import { GetServerSideProps } from 'next'
import fetch from 'isomorphic-unfetch'

import { dbConnect, jsonify } from '@api/mongodb'
import products from '@api/product'

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

import { HomeProps } from '@/Types'

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
	dbConnect()
	const res = await fetch('http://localhost:3000/api/products')
	const { data } = await res.json()
	
	let list = data.map(product=>{
		const { _id, expirateon, quantity, category, name} = product
		return {
			id: _id,
			name: name,
			category: category,
			quantity: quantity,
			expiration: expirateon,
		}
	})
	
	return {
		props: {
			products: list
		}
	}
}

export default Home
