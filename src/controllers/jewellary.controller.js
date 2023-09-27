const { jewellaryService } = require("../services");

/* Create jewellary */
const createJewellary = async (req, res) => {
  try {
    const reqBody = req.body;

    const jewellary = await jewellaryService.createJewellary(reqBody);
    if (!jewellary) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Jewellary create successfully!",
      data: jewellary,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get jewellary list */
const getJewellaryList = async (req, res) => {
  try {
    const getList = await jewellaryService.getJewellaryList();

    res.status(200).json({
      success: true,
      message: "Get jewellary list Successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get jewellary details by id */
const getJewellaryById = async (req, res) => {
  try {
    const jewellaryId = req.params.jewellaryId;
    const getDetails = await jewellaryService.getJewellaryById(jewellaryId);
    if (!getDetails) {
      throw new Error("Jewellary not Found!");
    }

    res.status(200).json({
      success: true,
      message: "JewellaryId details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, meassage: error.message });
  }
};

/* JewellaryId details update by id */
const updateJewellary = async (req, res) => {
  try {
    const jewellaryId = req.params.jewellaryId;
    const getDetails = await jewellaryService.updateJewellary(jewellaryId);
    if (!getDetails) {
      throw new Error("Jewellary not Found!");
    }

    await jewellaryService.updateJewellary(jewellaryId, req.body);

    res.status(200).json({
      success: true,
      message: "Jewellary details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete jewellary */
const deleteJewellary = async (req, res) => {
  try {
    const jewellaryId = req.params.jewellaryId;
    const getDetails = await jewellaryService.getJewellaryById(jewellaryId);
    if (!getDetails) {
      throw new Error("Jewellary not Found!");
    }

    await jewellaryService.deleteJewellary(jewellaryId);

    res.status(200).json({
      success: true,
      message: "Jewellary delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createJewellary,
  getJewellaryList,
  getJewellaryById,
  updateJewellary,
  deleteJewellary,
};
