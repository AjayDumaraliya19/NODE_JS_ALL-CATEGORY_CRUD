const express = require("express");
const { musicValidation } = require("../../validations");
const { musicController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create Movie */
router.post(
    "/create-music",
    validate(musicValidation.createMusic),
    musicController.createMusic
);

/* Get Movie list */
router.get(
    "/music-list",
    validate(musicValidation.getMusicList),
    musicController.getMusicList
);

/* Get Movie details by Id */
router.get(
    "/get-music-details/:musicId",
    validate(musicValidation.getMusicById),
    musicController.getMusicById
);

/* Movie details update by id */
router.put(
    "/update-music/:musicId",
    validate(musicValidation.updateMusic),
    musicController.updateMusic
);

/* Delete Movie */
router.delete(
    "/delete-music/:musicId",
    validate(musicValidation.getMusicById),
    musicController.deleteMusic
);


module.exports = router;