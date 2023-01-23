const router = require("express").Router();
const Order = require("../models/Order");
const Vendor = require("../models/Vendor");
const Commit = require("../models/Commit");

// create a new order
router.post("/create", async (req, res) => {

    const newOrder = new Order(req.body);
    try {

        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);

    } catch (error) {
        res.status(500).json("Internal Server Error");
    }

})


// update an order
router.put("/update/:id", async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { $set: req.body }, { $new: true });
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
})


// view orders and vendors supplying the products
router.get("/getdata/:id", async (req, res) => {
    try {

        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(401).json("Order not found");
        }
        let products = order.products;
        console.log(products);
        let vendors = [];
        for (let i = 0; i < products.length; i++) {
            const data = await Vendor.find({ products: products[i] });
            vendors.push(data);
        }
        res.status(200).json(vendors);

    } catch (error) {

        res.status(500).json("Internal Server Error");

    }
})

// getting the perfect seller
router.get("/getvendor/:id", async (req, res) => {
    try {

        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(401).json("Order not found");
        }
        let products = order.products;
        let vendors = [];
        for (let i = 0; i < products.length; i++) {
            const data = await Vendor.find({ products: products[i] });           
            
            min = 99999;
            min = Math.min(data.map(item =>{ item.price}));
            vendors.push(min);

        }
        return res.status(200).json(vendors);
    } catch (error) {
        return res.status(500).json("Internal Server Error");
    }
})


// commit an order
router.post("/commit", async (req, res) => {

    const newOrder = new Commit(req.body);

    try {
        const savedOrder = newOrder.save();
        return res.status(200).json(savedOrder);

    } catch (error) {
        res.status(500).json("Internal Server Error");

    }

})

// get commited orders
router.get("/getorders", async (req, res) => {
    try {
        const data = await Commit.find();
        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json("Internal Server Error");
    }
})




module.exports = router;