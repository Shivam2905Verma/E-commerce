import productModel from "../models/productModel.js";

// function for add product
const addProducts = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0].path;
    const image2 = req.files.image2 && req.files.image2[0].path;
    const image3 = req.files.image3 && req.files.image3[0].path;
    const image4 = req.files.image4 && req.files.image4[0].path;

    const allImages = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    const productData = {
      name,
      description,
      price: Number(price),
      image: allImages,
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true" ? true : false,
      date: new Date().toLocaleString(),
    };

    const newProduct = new productModel(productData);
    await newProduct.save();
    return res.json({ success: true, message: "Product added" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// function for List product
const listProducts = async (req, res) => {
  try {
    const product = await productModel.find({});
    res.json({ success: true, message: product });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// function for remove product
const removeProducts = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// function for single product info
const singleProducts = async (req, res) => {
  try {
    const { productId } = req.body;   
    const product = await productModel.findById(productId);
    res.json({ success: true, message: product });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};



export { addProducts, listProducts, removeProducts, singleProducts };
