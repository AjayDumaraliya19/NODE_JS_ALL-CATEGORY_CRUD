const { userService } = require("../services");

/* Create user */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;

    const user = await userService.createUser(reqBody);
    if (!user) {
        throw new Error("Something went wrong, please try again or later!");
      }

    res.status(200).json({
      success: true,
      message: "User create  successfully!",
      data: user,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get user list */
const getUserList = async (req, res) => {
  try {
    const getList = await userService.getUserList();

    res.status(200).json({
      success: true,
      message: "Get user list Successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get user details by id */
const getUserDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const getDetails = await userService.getUserById(userId);
    if (!getDetails) {
      throw new Error("User not Found!");
    }

    res.status(200).json({
      success: true,
      message: "User details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, meassage: error.message });
  }
};

/* User details update by id */
const updateDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }

    await userService.updateDetails(userId, req.body);

    res.status(200).json({
      success: true,
      message: "User details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete user */
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }

    await userService.deleteUser(userId);

    res.status(200).json({
      success: true,
      message: "User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createUser,
  getUserList,
  getUserDetails,
  updateDetails,
  deleteUser,
};
