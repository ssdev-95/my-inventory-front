import { dbConnect } from './mongodb'
import products from './product'

interface Product {
    name: string;
    quantity: number;
    category: string;
    expirateon: number;
}

export const DBController = {
    async create(doc: Product) {
        dbConnect()
        const res = await products.create(doc, (err, doc)=>{
            if(err) console.log(err)
        })
        console.log(res)
    },
    
    async read() {},

    async update(doc: Product, id: String) {},

    async delete(id: String) {}
}