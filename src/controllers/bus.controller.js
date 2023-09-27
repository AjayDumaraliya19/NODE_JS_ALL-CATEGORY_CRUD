const { busService } = require("../services");

/* Create user */
const createBus = async (req, res) => {
  try {
    const reqBody = req.body;

    const bus = await busService.createbus(reqBody);
    if (!bus) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Bus create  successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get user list */
const getBusList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { driver_name: { $regex: search, $options: "i" } },
        { bus_number: { $regex: search, $options: "i" } },
        { bus_stop: { $regex: search, $options: "i" } },
        { bus_route: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await busService.getbusList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get bus list Successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get user details by id */
const getBusDetails = async (req, res) => {
  try {
    const getDetails = await busService.getbusById(req.params.busId);
    if (!getDetails) {
      throw new Error("Bus not Found!");
    }

    res.status(200).json({
      success: true,
      message: "Bus details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, meassage: error.message });
  }
};

/* User details update by id */
const updateBusDetails = async (req, res) => {
  try {
    const busId = req.params.busId;
    const busExists = await busService.getbusById(busId);
    if (!busExists) {
      throw new Error("Bus not found!");
    }

    await busService.updateBusDetails(busId, req.body);

    res.status(200).json({
      success: true,
      message: "Bus details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete user */
const deleteBus = async (req, res) => {
  try {
    const busId = req.params.busId;
    const busExists = await busService.getbusById(busId);
    if (!busExists) {
      throw new Error("Bus not found!");
    }

    await busService.deletebus(busId);

    res.status(200).json({
      success: true,
      message: "Bus delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBus,
  getBusList,
  getBusDetails,
  updateBusDetails,
  deleteBus,
};
