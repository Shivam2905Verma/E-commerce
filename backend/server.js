import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import cartRoute from "./routes/cartRoute.js";
import orderRoute from "./routes/orderRoute.js";

//App Config
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());
connectDB();

//api endpints
app.use("/api/user" ,userRouter)
app.use("/api/product" ,productRoute)
app.use("/api/cart" , cartRoute)
app.use("/api/order" , orderRoute)

app.get("/", (req, res) => {
  res.send("api working");
});

app.listen(port, () => {
  console.log("listings on port");
});
