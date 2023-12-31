const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create User */
router.post(
  "/create-user",
  validate(userValidation.createUser),
  userController.createUser
);

/* Get User list */
router.get(
  "/user-list",
  validate(userValidation.getUserList),
  userController.getUserList
);

/* Get user details by ID */
router.get(
  "/get-details/:userId",
  validate(userValidation.getDetails),
  userController.getUserDetails
);

/* user details update by id */
router.put(
  "/update-details/:userId",
  validate(userValidation.updateDetails),
  userController.updateDetails
);

/* Delete user */
router.delete(
  "/delete-user/:userId",
  validate(userValidation.getDetails),
  userController.deleteUser
);

/** Send mail */
router.post(
  "/send-mail",
  validate(userValidation.sendMail),
  userController.sendMail
);

module.exports = router;
