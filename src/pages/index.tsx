import { useContext, useEffect } from 'react';
import { GetStaticProps } from 'next'

import { DBController } from './_api/DatabaseController'

import Header from '../components/Header'

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
		<Container>
			<Header />
		</Container>
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
