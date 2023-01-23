const express = require("express");
const mongoose = require("mongoose");
const orderRoute = require("./routes/order");
const vendorRoute = require("./routes/vendor");


const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://ritesh:ritesh@cluster0.ybgk0gu.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("DB Connected");
})


app.use("/api/order", orderRoute);
app.use("/api/vendor", vendorRoute);



app.listen("5000", () => {
    console.log("Server running on 5000");
})



