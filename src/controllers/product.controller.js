const { productService } = require("../services");

/* Create product */
const createProduct = async (req, res) => {
  try {
    const reqBody = req.body;

    const product = await productService.createProduct(reqBody);
    if (!product) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Product create  successfully!",
      data: { product },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get product list */
const getProductList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    // if (search) {
    //   filter.$or = [
    //     { first_name: { $regex: search, $option: "i" } },
    //     { last_name: { $regex: search, $option: "i" } },
    //   ];
    // }

    const getList = await productService.getProductList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get product list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get product details by id */
const getProductDetails = async (req, res) => {
  try {
    const getDetails = await productService.getProductById(req.params.productId);
    if (!getDetails) {
      throw new Error("Product not found!");
    }

    res.status(200).json({
      success: true,
      message: "Product details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Product details update by id */
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productExists = await productService.getProductById(productId);
    if (!productExists) {
      throw new Error("Product not found!");
    }

    await productService.updateProductDetails(productId, req.body);

    res.status(200).json({
      success: true,
      message: "Product details update succedully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete Product */
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productExists = await productService.getProductById(productId);
    if (!productExists) {
      throw new Error("Product not found!");
    }

    await productService.deleteProduct(productId);

    res.status(200).json({
      success: true,
      message: "Product delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createProduct,
  getProductList,
  getProductDetails,
  updateProduct,
  deleteProduct
};
