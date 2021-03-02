import { useContext } from 'react';
import { AddProductModalContext } from '../contexts/AddProductModalContext';
import {useForm} from 'react-hook-form';
import styles from '../styles/components/AddProductModal.module.css';

export function AddProductModal() {
    const {
      isAddProductModalOpen, 
      openCloseAddProductModal, 
      addProduct
    } = useContext(AddProductModalContext)
    const {register, handleSubmit} = useForm()

    let products = []
    
    const submit = (data) => {
      products.push({
          id: `${data.productCategory}-0${products.length+1}`,
          name: data.productName,
          quantity: data.productQuantity,
          category: data.productCategory,
          expiration: data.productExpiration,
      })
      addProduct(products)
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