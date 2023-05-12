const mongoose = require('mongoose');

// creating the product schema..................
const productSchema = new mongoose.Schema({
    name: String,
    qty: Number
},{
    versionKey: false
});

// creating a new model called "Product".................
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
// ....................................