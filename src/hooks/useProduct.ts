import { useContext } from 'react'
import { ProductContext } from 'src/contexts/ProductContext'

export function useProduct() {
    return useContext(ProductContext)
}