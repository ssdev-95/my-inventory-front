import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { EditModalContext } from '@/contexts/EditModalContext'

import { Modal, Overlay, Actions } from '@/components/Modals/EditProduct/styles'

export default function EditModal() {
    const { toggleEditModal, updateProduct, toUpdate } = useContext(EditModalContext)
    const { register, handleSubmit } = useForm()
    
    return (
        <Overlay>
            <Modal>
                <form action='#'>
                    <input
                       defaultValue={toUpdate?.name}
                       type="text"
                       name="name"
                       id="name"
                       {...register('name')}
                    />
                    <input
                       defaultValue={toUpdate?.category}
                       type="text"
                       name="category"
                       id="category"
                       {...register('category')}
                    />
                    <input
                       defaultValue={toUpdate?.quantity}
                       type="number"
                       name="quantity"
                       id="quantity"
                       {...register('quantity')}
                    />
                    <input
                       defaultValue={String(new Date(5))}
                       type="date"
                       name="expiration"
                       id="expiration"
                       {...register('expiration')}
                    />
                </form>
                <Actions>
                    <button
                       onClick={()=>toggleEditModal(null)}
                       style={{background: '#ff3c3c'}}
                    >cancel</button>
                    <button
                      onClick={handleSubmit(updateProduct)}
                      style={{background: '#080808'}}
                    >save</button>
                </Actions>
            </Modal>
        </Overlay>
    )
}
