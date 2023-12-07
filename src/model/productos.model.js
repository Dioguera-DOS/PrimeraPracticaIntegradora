const mongoose = require("mongoose");

const productsCollection = 'productos';
const productSchema = new mongoose.Schema(
{
    //"id": 1,
    title: String,
    description: String,
    price: Number,
    thumbnails: String,
    code: String,
    stock: Number,
    category: String,
    status: Boolean

},
{
    timestamps: true
}
)


const productosModel = mongoose.model(productsCollection, productSchema)
module.exports = productosModel