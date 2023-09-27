const express = require('express');
const { hotelValidation } = require('../../validations');
const { hotelController } = require('../../controllers');
const validate = require('../../middlewares/validate');


const router = express.Router();

/* Create hotel */
router.post(
    "/create-hotel",
    validate(hotelValidation.createHotel),
    hotelController.createHotel
);

/* Get hotel list */
router.get(
    "/hotel-list",
    validate(hotelValidation.getHotelList),
    hotelController.getHotelList
);

/* Get hotel details by ID */
router.get(
    "/get-hotel-details/:hotelId",
    validate(hotelValidation.getDetails),
    hotelController.getHotelDetails
);

/* hotel details update by id */
router.put(
    "/update-hotel-details/:hotelId",
    validate(hotelValidation.updateHotelDetails),
    hotelController.updateHotelDetails
)

/* Delete hotel */
router.delete(
    "/delete-hotel/:hotelId",
    validate(hotelValidation.getHotelDetails),
    hotelController.deleteHotel
);

module.exports = router;