import React, { useContext, useEffect } from 'react';
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { DBController } from './_api/DatabaseController'

import Header from '../components/Header'
import Dashboard from '../components/Dashboard'

import { Container } from '../styles/pages/home'

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

	// useEffect(() => {
    //     if(products.length>0) {
    //         localStorage.setItem('@app/products',JSON.stringify(products))
    //     }
    // }, [])
	
	return (
		<>
			<Head>
				<title>Home | My Inventory&trade;</title>
			</Head>
			<Container>
				<Header />
				<Dashboard />
			</Container>
		</>
	)
}

// export const getStaticProps:GetStaticProps = async () => {
// 	const products = DBController.get()

// 	return {
// 		props: {
// 			products
// 		}
// 	}
// }
