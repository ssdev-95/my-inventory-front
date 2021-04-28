import { client } from './mongodb'

interface Product {
    name: string;
    quantity: number;
    category: string;
    expirate: number;
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

        const results = await client
                                .db('myinventory')
                                .collection('products')
                                .find({})
                                .map(doc=>{
                                    return {
                                        id: doc['_id'],
                                        name: doc.name,
                                        quantity: doc.quantity,
                                        category: doc.quantity,
                                        expirate: doc.expirateon
                                    }
                                })


        console.log(results)

        await client.close()
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
                 .findOneAndDelete(id)

        await client.close()
    }
}