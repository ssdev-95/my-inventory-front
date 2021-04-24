import React, { useContext, useEffect } from 'react';
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { DBController } from '../api/DatabaseController'

import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import Switcher from '../components/ThemeSwitcher'

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
	
	return (
		<>
			<Head>
				<title>Home | My Inventory&trade;</title>
			</Head>
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
	//const products = DBController.get()
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
