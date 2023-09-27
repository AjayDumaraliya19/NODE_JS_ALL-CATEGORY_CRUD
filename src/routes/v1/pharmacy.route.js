const express = require("express");
const { pharmacyValidation } = require("../../validations");
const { pharmacyController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create pharmacy */
router.post(
  "/create-pharmacy",
  validate(pharmacyValidation.createPharmacy),
  pharmacyController.createPharmacy
);

/* Get pharmacy list */
router.get(
  "/pharmacy-list",
  validate(pharmacyValidation.getPharmacyList),
  pharmacyController.getPharmacyList
);

/* Get pharmacy details by ID */
router.get(
  "/get-pharmacy-details/:pharmacyId",
  validate(pharmacyValidation.getPharmacyById),
  pharmacyController.getPharmacyById
);

/* Pharmacy details update by id */
router.put(
  "/update-pharmacy-details/:pharmacyId",
  validate(pharmacyValidation.updatePharmacy),
  pharmacyController.updatePharmacy
);

/* Delete pharmacy */
router.delete(
  "/delete-pharmacy/:pharmacyId",
  validate(pharmacyValidation.getPharmacyById),
  pharmacyController.deletePharmacy
);

module.exports = router;
