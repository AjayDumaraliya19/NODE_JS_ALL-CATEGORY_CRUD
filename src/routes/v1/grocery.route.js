const express = require("express");
const { groceryValidation } = require("../../validations");
const { groceryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create grocery */
router.post(
    "/create-grocery",
    validate(groceryValidation.createGrocery),
    groceryController.createGrocery
);

/* Get grocery list */
router.get(
    "/grocery-list",
    validate(groceryValidation.getGroceryList),
    groceryController.getGroceryList
);

/* Get grocery details by ID */
router.get(
    "/get-grocery-details/:groceryId",
    validate(groceryValidation.getGroceryById),
    groceryController.getGroceryById
);

/* grocery details update by id */
router.put(
    "/update-grocery/:groceryId",
    validate(groceryValidation.updateGrocery),
    groceryController.updateGrocery
);

/* Delete grocery */
router.delete(
    "/delete-grocery/:groceryId",
    validate(groceryValidation.getGroceryById),
    groceryController.deleteGrocery
);


module.exports = router;