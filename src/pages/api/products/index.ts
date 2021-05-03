import { dbConnect } from '@api/mongodb'
import products from '@api/product'

dbConnect()

export default async (req, res) => {
    const { method } = req

    switch(method) {
        case 'GET':
            try {
                const productList = await products.find({})

                res.status(200).json( { success:true, data: productList } )
            } catch(err) {
                res.status(400).send('No data found for this request..')
            }
            break
        case 'POST':
            try {
                await products.create(req.body)

                res.status(200).send('Document sent to database')
            } catch(err) {
                res.status(400).send('Could not send data to database..')
            }
            break
        default:
            res.status(404).send('Not found..')
            break
    }
}
