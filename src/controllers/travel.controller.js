const { travelService } = require("../services");

/* Create travel */
const createTravel = async (req, res) => {
  try {
    const reqBody = req.body;

    const travel = await travelService.createTravel(reqBody);
    if (!travel) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Travel create successfully!",
      data: travel,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get travel list */
const getTravelList = async (req, res) => {
  try {
    const getList = await travelService.getTravelList();

    res.status(200).json({
      success: true,
      message: "Get travel list Successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get travel details by id */
const getTravelById = async (req, res) => {
  try {
    const travelId = req.params.travelId;
    const getDetails = await travelService.getTravelById(travelId);
    if (!getDetails) {
      throw new Error("Travel not Found!");
    }

    res.status(200).json({
      success: true,
      message: "Travel details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, meassage: error.message });
  }
};

/* Travel details update by id */
const updateTravel = async (req, res) => {
  try {
    const travelId = req.params.travelId;
    const getDetails = await travelService.getTravelById(travelId);
    if (!getDetails) {
      throw new Error("Travel not Found!");
    }

    await travelService.updateTravel(travelId, req.body);

    res.status(200).json({
      success: true,
      message: "Travel details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete travel */
const deleteTravel = async (req, res) => {
  try {
    const travelId = req.params.travelId;
    const getDetails = await travelService.getTravelById(travelId);
    if (!getDetails) {
      throw new Error("Travel not Found!");
    }

    await travelService.deleteTravel(travelId);

    res.status(200).json({
      success: true,
      message: "Travel delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createTravel,
  getTravelList,
  getTravelById,
  updateTravel,
  deleteTravel,
};
