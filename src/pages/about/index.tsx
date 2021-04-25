import React, { useContext } from 'react'
import Head from 'next/head'
import Header from '../../components/Header'

import Contact from '../../components/Modals/Contact'

import { Container, Main, Footer } from '../../styles/pages/home'
import { ContactModalContext } from '../../contexts/ContactModalContext'

export default function About() {
	const { isContactModalOpen } = useContext(ContactModalContext)
	
    return (
		<>
			<Head>
				<title>About | My Inventory&trade;</title>
			</Head>
			<Container>
				{ isContactModalOpen && <Contact />}
				<Header pathA="home" pathB="login" />
                <Main>
                    <h1>About</h1>
                </Main>
				<Footer>
				</Footer>
			</Container>
		</>
	)
}
