const express = require("express");
const { bannerValidation } = require("../../validations");
const { bannerController } = require("../../controllers");
const validate = require("../../middlewares/validate");
// const auth = require("../../middlewares/auth");
const { upload } = require("../../middlewares/upload");

const router = express.Router();

/** Create banner route */
router.post(
  "/create_banner",
//   auth(),
  validate(bannerValidation.createBanner),
  bannerController.creaetBanner
);

module.exports = router;
