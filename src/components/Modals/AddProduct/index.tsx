import React, { useContext } from 'react'
// import { useForm } from 'react-hook-form'

import { AddProductModalContext } from '@/contexts/AddProductModalContext'

import { Modal, Overlay, Actions } from './styles'

export default function AddModal() {
    const { toggleModal } = useContext(AddProductModalContext)
    // const { register, handleSubmit } = useForm()

    return (
        <Overlay>
            <Modal>
                <form
                  action="http://localhost:3000/api/products"
                  method="post"
                  id="add_product"
                >
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Product name"
                    />
                    <input
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Type 'hygiene', 'food' or 'cleaning'"
                    />
                    <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder="Product quantity"
                    />
                    <input
                        type="date"
                        name="expiration"
                        id="expiration"/>
                </form>
                <Actions>
                    <button
                        onClick={toggleModal}
                        style={{background: '#ff3c3c'}}
                    >cancel</button>
                    <button
                        type="submit"
                        form="add_product"
                        style={{background: '#3cff3c'}}
                    >save</button>
                </Actions>
            </Modal>
        </Overlay>
    )
}
