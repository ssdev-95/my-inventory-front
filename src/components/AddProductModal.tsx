import { useContext } from 'react';
import { AddProductModalContext } from '../contexts/AddProductModalContext';
import styles from '../styles/components/AddProductModal.module.css';

export function AddProductModal() {
    const {isAddProductModalOpen, openCloseAddProductModal} = useContext(AddProductModalContext)
    
    return (
        isAddProductModalOpen && (
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <form action="#">
                        <input type="text" placeholder="Product"/>
                        <input type="number" placeholder="12"/>
                        <input 
                          type="text" 
                          placeholder="Food, Hygiene or Cleaning"/>
                        <input type="date"/>
                    </form>
                    <div className={styles.actions}>
                        <a className={styles.cancelButton} href="" onClick={openCloseAddProductModal}>cancel</a>
                        <a className={styles.saveButton} href="">save</a>
                    </div>
                </div>
            </div>
        )
    )
}