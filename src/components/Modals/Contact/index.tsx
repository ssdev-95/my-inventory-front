import React, { useContext } from 'react'
import Link from 'next/link'

import { ContactModalContext } from '../../../contexts/ContactModalContext'

import { Overlay, Modal } from './styles'

export default function EditModal() {
    const { toggleContactModal } = useContext(ContactModalContext)
    
    return (
        <Overlay>
            <Modal>
                <button onClick={toggleContactModal}>
                    <img src="drawable/add_icon.svg" alt=""/>
                </button>
                <span>Contact</span>
                <div>
                    <Link href=""><img src="drawable/behance.svg" alt="Icon"/></Link>
                    <Link href=""><img src="drawable/facebook.svg" alt="Icon"/></Link>
                    <Link href=""><img src="drawable/instagram.svg" alt="Icon"/></Link>
                    <Link href=""><img src="drawable/twitter.svg" alt="Icon"/></Link>
                    <Link href="https://linkedin.com/in/salomao-vasconcelos/">
                        <img src="drawable/linkedin.svg" alt="Icon"/>
                    </Link>
                    <Link href=""><img src="drawable/mail.svg" alt="Icon"/></Link>
                    <Link href=""><img src="drawable/paypal.svg" alt="Icon"/></Link>
                    <Link href="https://github.com/xSallus">
                        <img src="drawable/github.svg" alt="Icon"/>
                    </Link>
                </div>
            </Modal>
        </Overlay>
    )
}
