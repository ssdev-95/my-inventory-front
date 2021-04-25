import React, { useContext } from 'react'

import { AddProductModalContext } from '../../../contexts/AddProductModalContext'

import { Modal, Overlay, Actions } from './styles'

export default function AddModal() {
    const { toggleModal } = useContext(AddProductModalContext)

    return (
        <Overlay>
            <Modal>
                <form action="#">
                    <input type="text" name="name" id="name"/>
                    <input type="text" name="category" id="category"/>
                    <input type="number" name="quantity" id="quantity"/>
                    <input type="date" name="expiration" id="expiration"/>
                </form>
                <Actions>
                    <button onClick={toggleModal} style={{background: '#ff3c3c'}}>cancel</button>
                    <button style={{background: '#3cff3c'}}>save</button>
                </Actions>
            </Modal>
        </Overlay>
    )
}
