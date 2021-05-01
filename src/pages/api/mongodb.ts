import Mongoose from 'mongoose'
const uri = "mongodb+srv://xsallus:sodio505@cluster0.uahyz.mongodb.net/myinventory?retryWrites=true&w=majority"

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
