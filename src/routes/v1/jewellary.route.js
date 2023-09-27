const express = require("express");
const { jewellaryValidation } = require("../../validations");
const { jewellaryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create jewellary */
router.post(
  "/create-jewellary",
  validate(jewellaryValidation.createJewellary),
  jewellaryController.createJewellary
);

/* Get jewellary list */
router.get(
  "/jewellary-list",
  validate(jewellaryValidation.getJewellaryList),
  jewellaryController.getJewellaryList
);

/* Get jewellary details by ID */
router.get(
  "/get-jewellary-details/:jewellaryId",
  validate(jewellaryValidation.getJewellaryById),
  jewellaryController.getJewellaryById
);

/* Jewellary details update by id */
router.put(
  "/update-jewellary/:jewellaryId",
  validate(jewellaryValidation.updateJewellary),
  jewellaryController.updateJewellary
);

/* Delete jewellary */
router.delete(
  "/delete-jewellary/:jewellaryId",
  validate(jewellaryValidation.getJewellaryById),
  jewellaryController.deleteJewellary
);

module.exports = router;
