import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://xsallus:sodio505@cluster0.uahyz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

export const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

//Samle from mongo db docs
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
