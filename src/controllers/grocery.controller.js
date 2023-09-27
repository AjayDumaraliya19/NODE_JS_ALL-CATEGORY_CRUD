const { groceryService } = require("../services");

/* Create grocery */
const createGrocery = async (req, res) => {
  try {
    const reqBody = req.body;

    const grocery = await groceryService.createGrocery(reqBody);
    if (!grocery) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Grocery create successfully!",
      data: grocery,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get grocery list */
const getGroceryList = async (req, res) => {
  try {
    const getList = await groceryService.getGroceryList();

    res.status(200).json({
      success: true,
      message: "Get grocery list Successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get grocery details by id */
const getGroceryById = async (req, res) => {
  try {
    const groceryId = req.params.groceryId;
    const grocery = await groceryService.getGroceryById(groceryId);
    if (!grocery) {
      throw new Error("Grocery not Found!");
    }

    res.status(200).json({
      success: true,
      message: "Grocery details get successfully!",
      data: grocery,
    });
  } catch (error) {
    res.status(400).json({ success: false, meassage: error.message });
  }
};

/* grocery details update by id */
const updateGrocery = async (req, res) => {
  try {
    const groceryId = req.params.groceryId;
    const grocery = await groceryService.updateGrocery(groceryId);
    if (!grocery) {
      throw new Error("Grocery not Found!");
    }

    await groceryService.updateGrocery(groceryId, req.body);

    res.status(200).json({
      success: true,
      message: "Grocery details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete grocery */
const deleteGrocery = async (req, res) => {
  try {
    const groceryId = req.params.groceryId;
    const grocery = await groceryService.getGroceryById(groceryId);
    if (!grocery) {
      throw new Error("Grocery not Found!");
    }

    await groceryService.deleteGrocery(groceryId);

    res.status(200).json({
      success: false,
      message: "Grocery delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createGrocery,
  getGroceryList,
  getGroceryById,
  updateGrocery,
  deleteGrocery,
};
