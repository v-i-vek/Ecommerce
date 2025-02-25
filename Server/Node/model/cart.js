const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    userId:{
        type :mongoose.Schema.Types.ObjectId,
        ref:"user",
        required :true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true
    }
})

module.exports = new mongoose.model("cart", cartSchema);