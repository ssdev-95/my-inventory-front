import Mongoose from 'mongoose'
const uri = "mongodb+srv://xsallus:sodio505@cluster0.uahyz.mongodb.net/myinventory?retryWrites=true&w=majority"

const { MONGO_URI, MONGO_DB } = process.env

export async function dbConnect() {
    if(Mongoose.connection.readyState>=1) return

    return Mongoose.connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useFindAndModify: true
    })
}

export function jsonify(obj) {
    return JSON.parse(JSON.stringify(obj))
}
