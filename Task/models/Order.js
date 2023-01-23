const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({

    customerName: {
        type: String,
        required: true
    },
    customerPhn: {
        type: String,
        required: true
    },
    customerAdd: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    timeToDeliever: {
        type: String,
        required: true
    }


})

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
