const express = require("express");
const { travelValidation } = require("../../validations");
const { travelController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create travel */
router.post(
  "/create-travel",
  validate(travelValidation.createTravel),
  travelController.createTravel
);

/* Get travel list */
router.get(
  "/travel-list",
  validate(travelValidation.getTravelList),
  travelController.getTravelList
);

/* Get travel details by ID */
router.get(
  "/get-travel-details/:travelId",
  validate(travelValidation.getTravelbyId),
  travelController.getTravelById
);

/* Travel details update by id */
router.put(
  "/update-travel-details/:travelId",
  validate(travelValidation.updateTravel),
  travelController.updateTravel
);

/* Delete travel */
router.delete(
  "/delete-travel/:travelId",
  validate(travelValidation.getTravelbyId),
  travelController.deleteTravel
);

module.exports = router;
