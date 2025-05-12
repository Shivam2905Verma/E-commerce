import express from "express";
import {
  allOrders,
  placeOrder,
  placeOrderRazorpay,
  placeOrderStrip,
  updateStatus,
  userOrders,
  verifyStripe,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRoute = express.Router();

//admin features
orderRoute.post("/list", adminAuth, allOrders);
orderRoute.post("/status", adminAuth, updateStatus);

//payment features
orderRoute.post("/place", authUser, placeOrder);
orderRoute.post("/stripe", authUser, placeOrderStrip);
orderRoute.post("/razorpay", authUser, placeOrderRazorpay);

//user feature
orderRoute.post("/userorders", authUser, userOrders);

//verify payment
orderRoute.post("/verifyStripe" , authUser , verifyStripe)

export default orderRoute;
