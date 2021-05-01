import { dbConnect } from './mongodb'

interface Product {
    name: string;
    quantity: number;
    category: string;
    expirateon: number;
}

export const DBController = {
    async create(doc: Product) {},
    
    async read() {},

    async update(doc: Product, id: String) {},

    async delete(id: String) {}
}