import { client } from './mongodb'

interface Product {
    name: string;
    quantity: number;
    category: string;
    expirateon: number;
}

export const DBController = {
    async create(doc: Product) {
        await client.connect()

        await client
                 .db('myinventory')
                 .collection('products')
                 .insertOne(doc)

        await client.close()
    },
    
    async read() {
        await client.connect()

        const results = client
            .db('myinventory')
            .collection('products')
            .find({})

        let products = []
        
        await results.forEach(doc=>{
            const { _id, name, quantity, category, expirateon } = doc
            
            products.push({
                id: `${_id}`,
                name: name,
                quantity: quantity,
                category: category,
                expiration: expirateon
            })
        })

        await client.close()

        return products
    },

    async update(doc: Product, id: String) {
        await client.connect()

        await client
                 .db('myinventory')
                 .collection('products')
                 .findOneAndUpdate(id, doc)

        await client.close()
    },

    async delete(id: String) {
        await client.connect()

        await client
                 .db('myinventory')
                 .collection('products')
                 .deleteOne({_id: id})

        await client.close()
    }
}