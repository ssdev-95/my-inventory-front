import { useContext } from 'react';
import { AddProductModalContext } from '../contexts/AddProductModalContext';
import {useForm} from 'react-hook-form';
import {Formateer} from '../api/HandleData';

import styles from '../styles/components/AddProductModal.module.css';

export function AddProductModal() {
    const {
      isAddProductModalOpen, 
      openCloseAddProductModal, 
      addProduct,
      Products
    } = useContext(AddProductModalContext)
    const {register, handleSubmit} = useForm()
    
    const submit = (data) => {
      const product = {
          id: Formateer.formatId(Formateer.formatCategory(data.productCategory), String(data.expiration)),
          name: data.productName,
          quantity: Formateer.formatUnity(data.productQuantity),
          category: Formateer.formatCategory(String(data.productCategory)),
          expiration: Formateer.formatDate(data.productExpiration),
      }
      addProduct(product)
      openCloseAddProductModal()
    }

    return (
        isAddProductModalOpen && (
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <form action="#">
                        <input 
                          name="productName" 
                          type="text" 
                          placeholder="Product"
                          ref={register}/>
                        <input 
                          name="productQuantity"
                          type="number" 
                          placeholder="12"
                          ref={register}/>
                        <input 
                          name="productCategory"
                          type="text" 
                          placeholder="Food, Hygiene or Cleaning"
                          ref={register}/>
                        <input
                          name="productExpiration" 
                          type="date"
                          ref={register}/>
                    </form>
                    <div className={styles.actions}>
                        <a className={styles.cancelButton} 
                           href="" 
                           onClick={openCloseAddProductModal}>cancel</a>
                        <a className={styles.saveButton} href="" onClick={handleSubmit(submit)}>save</a>
                    </div>
                </div>
            </div>
        )
    )
}