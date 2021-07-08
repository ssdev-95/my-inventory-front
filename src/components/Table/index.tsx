/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'

import { Inventory } from 'src/@types/inventory'
import { CButton } from 'src/components/Button'

import { useProduct } from 'src/hooks/useProduct'

import styles from './table.module.scss'

export function CTable() {
    const { filters, currentSelection, products, handleDeleteData } = useProduct()
    
    const [filtered, setFiltered] = useState<Inventory.Product[]|undefined>()

    useEffect(()=>{
        const filtereds = products?.filter(item=>item.category===filters[currentSelection].toLowerCase())
        setFiltered(filtereds)
    }, [products, filters])

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
                    filtered && filtered.map(item=>(
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