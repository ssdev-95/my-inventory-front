/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

import { useNavigation } from 'src/hooks/useNavigation'
import { useAuth } from 'src/hooks/useAuth'

import { Header } from 'src/components/Header'
import { Container } from 'src/components/Dashboard/Container'
import { CLogin } from 'src/components/Dashboard/Login'
import { CSignUp } from 'src/components/Dashboard/SignUp'
import { CAbout } from 'src/components/Dashboard/About'
import { CAddProduct } from 'src/components/Dashboard/AddProduct'
import { CProductList } from 'src/components/Dashboard/ProductList'
import { CContact } from 'src/components/Dashboard/Contact'

import styles from './home.module.scss'

export function Home() {
    const { currentComponent, changeCurrentComponent } = useNavigation()
    const { user } = useAuth()

    useEffect(()=>{
        if(!user) {
            changeCurrentComponent('Login')
            return
        }
    }, [])

    return (
        <div
          className={styles.homeContainer}
        >
            <Header />
            <Container>
                { (currentComponent==='AddProduct') && (<CAddProduct />) }
                { (currentComponent==='About') && (<CAbout />) }
                { (currentComponent==='Login') && (<CLogin />) }
                { (currentComponent==='SignUp') && (<CSignUp />)}
                { (currentComponent==='ProductList') && (<CProductList />) }
                { (currentComponent==='Contact') && (<CContact />) }
            </Container>
        </div>
    )
}