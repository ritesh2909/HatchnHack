const router = require("express").Router();
const Vendor = require("../models/Vendor");

// create a vendor
router.post("/addvendor", async (req, res) => {
    const newVendor = new Vendor(req.body);

    try {
        const savedVendor = await newVendor.save();
        res.status(200).json(savedVendor);

    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
})


// update a vendor details
router.put("/:id", async (req, res) => {
    try {
        const updatedVendor = await Vendor.findByIdAndUpdate(req.params.id, { $set: req.body }, { $new: true });
        res.status(200).json(updatedVendor);

    } catch (error) {

    }
})



module.exports = router;