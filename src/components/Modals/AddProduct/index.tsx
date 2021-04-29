import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { AddProductModalContext } from '../../../contexts/AddProductModalContext'

import { Modal, Overlay, Actions } from './styles'

export default function AddModal() {
    const { toggleModal, submit } = useContext(AddProductModalContext)
    const { register, handleSubmit } = useForm()

    return (
        <Overlay>
            <Modal>
                <form action="#">
                    <input { ...register('name') }
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Product name"
                    />
                    <input { ...register('category') }
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Type 'hygiene', 'food' or 'cleaning'"
                    />
                    <input { ...register('quantity') }
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder="Product quantity"
                    />
                    <input { ...register('expiration') }
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
                        onClick={handleSubmit(submit)}
                        style={{background: '#3cff3c'}}
                    >save</button>
                </Actions>
            </Modal>
        </Overlay>
    )
}
