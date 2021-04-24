import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'

import { Container, Main } from '../../styles/pages/about'

export default function About() {
    return (
		<>
			<Head>
				<title>Signin | My Inventory&trade;</title>
			</Head>
			<Container>
				<Header name="home" />
                <Main>
                    <form action="">
                        <input
                           type="text"
                           id="username"
                           name="username"
                           placeholder="Paste your name"
                        />
                    </form>
                </Main>
			</Container>
		</>
	)
}
