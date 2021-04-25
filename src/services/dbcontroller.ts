import { database } from './api'

export const DBController = {
    save(product: any) {
        database
            .collection('products')
            .add({
                name: product.name,
                quantity: product.quantity,
                expires: product.expiration,
                category: product.category
            })
    },
    async get() {
        let products = []
        let list = ''
        database
            .collection('products')
            .onSnapshot(snapshot=>{
                products = [...snapshot.docs.map(doc=>{
                        return {
                            id: doc.id,
                            name: doc.data().name,
                            quantity: doc.data().quantity,
                            category: doc.data().category,
                            expiration: doc.data().expires
                        }
                }), ...products]
                list = (JSON.stringify(products))
            })
        return products
    },
    update(product: any) {
        database
            .collection('products')
            .doc(product.id)
            .update({
                name: product.name,
                quantity: product.quantity,
                category: product.category,
                expires: product.expiration
            })
    },
    delete(id: string) {
        database
            .collection('products')
            .doc(id)
            .delete()
    },
}
