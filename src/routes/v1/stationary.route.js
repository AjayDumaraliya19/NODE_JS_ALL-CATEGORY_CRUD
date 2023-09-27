const express = require("express");
const { stationaryValidation } = require("../../validations");
const { stationaryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const router = express.Router();

/* Create statonary */
router.post(
  "/create-stationary",
  validate(stationaryValidation.createStationary),
  stationaryController.createStationary
);

/* Get Stationary list */
router.get(
  "/stationary-list",
  validate(stationaryValidation.getStationaryList),
  stationaryController.getStationaryList
);

/* Get stationary details by id */
router.get(
  "/get-stationary-details/:stationaryId",
  validate(stationaryValidation.getStationaryDetails),
  stationaryController.getStationaryDetails
);

/* Stationary details update by id */
router.put(
  "/update-details/:stationaryId",
  validate(stationaryValidation.updateStationaryDetails),
  stationaryController.updateStationary
);

/* Delete stationary */
router.delete(
  "/delete-stationary/:stationaryId",
  validate(stationaryValidation.getStationaryDetails),
  stationaryController.deleteStationary
);

module.exports = router;