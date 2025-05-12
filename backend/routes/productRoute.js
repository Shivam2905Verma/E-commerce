import express from "express";
import {
  addProducts,
  listProducts,
  removeProducts,
  singleProducts,
} from "../controllers/productController.js";

const productRoute = express.Router();

// import upload from "../middleware/multer.js";
import { storage } from "../config/couldinary.js";
import multer from "multer";
import adminAuth from "../middleware/adminAuth.js";
const uplaod = multer({ storage });

productRoute.post(
  "/add",
  adminAuth,
  uplaod.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProducts
);
productRoute.post("/remove", adminAuth, removeProducts);
productRoute.get("/single", singleProducts);
productRoute.get("/list", listProducts);

export default productRoute;
