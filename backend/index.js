
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// mongoose.connect("mongodb://127.0.0.1:27017/zerodha")
// .then(()=> console.log("DB connected"))
// .catch(err => console.log(err))

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB Atlas connected"))
.catch(err=>console.log(err))

// AUTH ROUTES
app.use("/api/auth",authRoutes)


// HOLDINGS
app.get("/allHoldings", async (req, res) => {
let allHoldings = await HoldingsModel.find({});
res.json(allHoldings);
});


// POSITIONS
app.get("/allPositions", async (req, res) => {
let allPositions = await PositionsModel.find({});
res.json(allPositions);
});


// NEW ORDER
app.post("/newOrder", async (req, res) => {

let newOrder = new OrdersModel({
name: req.body.name,
qty: req.body.qty,
price: req.body.price,
mode: req.body.mode,
});

await newOrder.save();

res.send("Order saved!");

});

// app.listen(5000,()=>{
// console.log("Server running on port 5000");
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});