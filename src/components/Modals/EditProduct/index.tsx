import React, { useContext } from 'react'

import { EditModalContext } from '@/contexts/EditModalContext'

import { Modal, Overlay, Actions } from './styles'

export default function EditModal() {
    const { toggleEditModal, toUpdate } = useContext(EditModalContext)
    
    return (
        <Overlay>
            <Modal>
                <form
                  method="put"
                  action={`/api/products/${toUpdate?.id}`}
                  id="edit_product"
                >
                    <input value={toUpdate?.name} type="text" name="name" id="name"/>
                    <input value={toUpdate?.category} type="text" name="category" id="category"/>
                    <input value={toUpdate?.quantity} type="number" name="quantity" id="quantity"/>
                    <input value={Date.parse(toUpdate?.expiration)} type="date" name="expiration" id="expiration"/>
                </form>
                <Actions>
                    <button onClick={toggleEditModal} style={{background: '#ff3c3c'}}>cancel</button>
                    <button
                      type="submit"
                      form="edit_product"
                      style={{background: '#3cff3c'}}
                    >save</button>
                </Actions>
            </Modal>
        </Overlay>
    )
}
