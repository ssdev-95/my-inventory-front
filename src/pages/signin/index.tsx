import React, { useContext } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Contact from '@/components/Modals/Contact'

import { Container, Main, Footer } from '@/styles/pages/home'
import { Form } from '@/styles/pages/signin'
import { ContactModalContext } from '@/contexts/ContactModalContext'

export default function About() {
	const { isContactModalOpen } = useContext(ContactModalContext)
	
    return (
		<>
			<Head>
				<title>Signin | My Inventory&trade;</title>
			</Head>
			<Container>
				{ isContactModalOpen && <Contact />}
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
