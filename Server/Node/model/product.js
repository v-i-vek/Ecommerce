const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    category: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
    },

    description: {
        type: String,
        required: true,
        trim: true,
    },

    brand: {
        type: String,
        required: true,
        trim: true,
    },

   
});

module.exports = mongoose.model("product", productSchema);