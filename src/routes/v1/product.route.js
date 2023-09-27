const express = require('express');
const { productValidation } = require('../../validations');
const { productController } = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

/* Create product */
router.post(
    "/create-product",
    validate(productValidation.createProduct),
    productController.createProduct
);

/* Get product list */
router.get(
    "/product-list",
    validate(productValidation.getProductList),
    productController.getProductList
);

/* Get product details by ID */
router.get(
    "/get-product-details/:productId",
    validate(productValidation.getproductDetails),
    productController.getProductDetails
);

/* product details update by id */
router.put(
    "/update-product-details/:productId",
    validate(productValidation.updateProduct),
    productController.updateProduct
);

/* Delete user */
router.delete(
    "/delete-product/:productId",
    validate(productValidation.getproductDetails),
    productController.deleteProduct
);

module.exports = router;