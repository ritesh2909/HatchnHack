const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },  
    products: {
        type: Array,
        required: true
    },
    canDeliever: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }

},{timestamps: true})


const Vendor = mongoose.model("Vendor", VendorSchema);
module.exports = Vendor;