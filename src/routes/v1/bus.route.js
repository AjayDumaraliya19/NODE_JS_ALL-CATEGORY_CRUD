const express = require("express");
const { busValidation } = require("../../validations");
const { busController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create User */
router.post(
    "/create-bus",
    validate(busValidation.createBus),
    busController.createBus
);

/* Get User list */
router.get(
    "/bus-list",
    validate(busValidation.getBusList),
    busController.getBusList
);

/* Get user details by ID */
router.get(
    "/get-bus-details/:busId",
    validate(busValidation.getBusDetails),
    busController.getBusDetails
);

/* bus details update by id */
router.put(
    "/update-bus-details/:busId",
    validate(busValidation.updateBusDetails),
    busController.updateBusDetails
);

/* Delete user */
router.delete(
    "/delete-bus/:busId",
    validate(busValidation.getBusDetails),
    busController.deleteBus
);


module.exports = router;