import mongoose, { Schema } from 'mongoose'

const MODEL_NAME = 'product'

const schema = new Schema({
    name: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    expirateon: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

export default mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema, 'products')
