const { hotelService } = require("../services");

/* Create hotel */
const createHotel = async (req, res) => {
  try {
    const reqBody = req.body;

    const hotel = await hotelService.createHotel(reqBody);
    if (!hotel) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Hotel create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get hotel list */
const getHotelList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    // if (search) {
    //   filter.$or = [{ book_name: { $regex: search, $regex: "i" } }];
    // }

    const getList = await hotelService.getHotelList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get hotel list Successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get hotel details by id */
const getHotelDetails = async (req, res) => {
  try {
    const getDetails = await hotelService.getHotelById(req.params.hotelId);
    if (!getDetails) {
      throw new Error("Hotel not Found!");
    }

    res.status(200).json({
      success: true,
      message: "Hotel details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, meassage: error.message });
  }
};

/* Hotel details update by id */
const updateHotelDetails = async (req, res) => {
  try {
    const hotelId = req.params.hotelId;
    const hotelExists = await hotelService.getHotelById(hotelId);
    if (!hotelExists) {
      throw new Error("Hotel not found!");
    }

    await hotelService.updateHotelDetails(hotelId, req.body);

    res.status(200).json({
      success: true,
      message: "Hotel details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete hotel */
const deleteHotel = async (req, res) => {
  try {
    const hotelId = req.params.hotelId;
    const hotelExists = await hotelService.getHotelById(hotelId);
    if (!hotelExists) {
      throw new Error("Hotel not found!");
    }

    await hotelService.deleteHotel(hotelId);

    res.status(200).json({
      success: false,
      message: "Hotel delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createHotel,
  getHotelList,
  getHotelDetails,
  updateHotelDetails,
  deleteHotel,
};
