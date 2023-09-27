const express = require('express');
const { categoryValidation } = require('../../validations');
const { categoryController } = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

/* Create category */
router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    categoryController.createCategory
);

/* Get category list */
router.get(
    "/category-list",
    validate(categoryValidation.getCategoryList),
    categoryController.getCategoryList
);


/* Get category details by ID */
router.get(
    "/get-category-details/:categoryId",
    validate(categoryValidation.getCategoryDetails),
    categoryController.getCategoryDetails
);

/* Category details update by id */
router.put(
    "/update-category-details/:categoryId",
    validate(categoryValidation.updateCategoryDetails),
    categoryController.updateCategoryDetails
);

/* Delete category */
router.delete(
    "/delete-category/:categoryId",
    validate(categoryValidation.getCategoryDetails),
    categoryController.deleteCategory
);



module.exports = router;