import { MongoClient } from 'mongodb'

const uri = process.env.MONGO_DB_URI

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

// client.connect(err => {
//   const collection = client.db("myinventory").collection("products")
//   // perform actions on the collection object
//   client.close()
// })

async function run() {
    try {
        await client.connect()

        await client.db("myinventory").command({ ping: 1 })

        console.log('Connected sucessfully to database')
    } finally {
        await client.close()
    }
}

run().catch(console.dir)
