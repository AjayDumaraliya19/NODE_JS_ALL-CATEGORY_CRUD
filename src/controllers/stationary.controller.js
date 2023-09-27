const { stationaryService } = require("../services");

/* Create staionary */
const createStationary = async (req, res) => {
  try {
    const reqBody = req.body;

    const staionary = await stationaryService.createStationary(reqBody);
    if (!staionary) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Stationary create successfully!",
      data: { reqBody },
    });
  } catch {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get stationary list */
const getStationaryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    // if (search) {
    //   filter.$or = [
    //     { first_name: { $regex: search, $option: "i" } },
    //     { last_name: { $regex: search, $option: "i" } },
    //   ];
    // }

    const getList = await stationaryService.getStationary(filter, options);

    res.status(200).json({
      success: true,
      message: "Get stationary list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get stationary details by id */
const getStationaryDetails = async (req, res) => {
  try {
    const getDetails = await stationaryService.getStationaryById(req.params.stationaryId);
    if (!getDetails) {
      throw new Error("Stationary not found!");
    }

    res.status(200).json({
      success: true,
      message: "Stationary details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Stationary details update by id */
const updateStationary = async (req, res) => {
  try {
    const stationaryId = req.params.stationaryId;
    const stationaryExists = await stationaryService.getStationaryById(stationaryId);
    if (!stationaryExists){
      throw new Error("Stationary not found!");
    }

    await stationaryService.updateDetails(stationaryId, req.body);

    res.status(200).json({
      success: true,
      message: "Stationary details update succedully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete stationary */
const deleteStationary = async (req, res) => {
  try {
    const stationaryId = req.params.stationaryId;
    const stationaryExists = await stationaryService.getStationaryById(stationaryId);
    if (!stationaryExists) {
      throw new Error("Stationary not found!");
    }

    await stationaryService.deleteStationary(stationaryId);

    res.status(200).json({
      success: true,
      message: "Stationary delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

module.exports = {
  createStationary,
  getStationaryList,
  getStationaryDetails,
  updateStationary,
  deleteStationary
};
