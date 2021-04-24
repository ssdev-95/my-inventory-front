import { database } from './api'

export const DBController = {
    save(product: any) {
        database
            .firestore()
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
        database.firestore().collection('products').onSnapshot(snapshot=>{
                snapshot.docs.forEach(doc=>{
                        products = [...products, {
                            id: doc.id,
                            name: doc.data().name,
                            quantity: doc.data().quantity,
                            category: doc.data().category,
                            expiration: doc.data().expires
                        }]
                    })
                    console.log(products)
                })
        console.log(products)
        return products
    },
    update(product: any) {
        database
            .firestore()
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
            .firestore()
            .collection('products')
            .doc(id)
            .delete()
    },
}
