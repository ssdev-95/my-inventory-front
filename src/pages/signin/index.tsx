import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'

import { Container, Main, Footer } from '../../styles/pages/home'
import { Form } from '../../styles/pages/signin'

export default function About() {
    return (
		<>
			<Head>
				<title>Signin | My Inventory&trade;</title>
			</Head>
			<Container>
				<Header pathA="about" pathB="home" />
                <Main>
                    <h1>Signin / Signup</h1>
					<Form></Form>
                </Main>
				<Footer></Footer>
			</Container>
		</>
	)
}
