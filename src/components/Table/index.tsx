import DeleteIcon from '@material-ui/icons/Delete'
import { CButton } from 'src/components/Button'

import { useProduct } from 'src/hooks/useProduct'

import styles from './table.module.scss'

export function CTable() {
    const { products, handleDeleteData } = useProduct()

    return (
        <table className={styles.products}>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Expiration</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map(item=>(
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.expiration}</td>
                            <td>
                                <CButton onClick={()=>handleDeleteData(item.id || '')}>
                                    <DeleteIcon />
                                </CButton>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}