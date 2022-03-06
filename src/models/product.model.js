const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    Variety: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Variety",
        required: true
    }]
},
{
    timestamps: true
})

const Product = mongoose.model("Product", productSchema);
module.exports = Product