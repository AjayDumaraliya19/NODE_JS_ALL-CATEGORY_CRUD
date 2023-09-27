const { musicService } = require("../services");

/* Create music */
const createMusic = async (req, res) => {
  try {
    const reqBody = req.body;

    const music = await musicService.createMusic(reqBody);
    if (!music) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Music create successfully!",
      data: music,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get music list */
const getMusicList = async (req, res) => {
  try {
    const getList = await musicService.getMusicList();

    res.status(200).json({
      success: true,
      message: "Get music list Successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get music details by id */
const getMusicById = async (req, res) => {
  try {
    const musicId = req.params.musicId;
    const getDetails = await musicService.getMusicById(musicId);
    if (!getDetails) {
      throw new Error("Music not Found!");
    }

    res.status(200).json({
      success: true,
      message: "Music details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, meassage: error.message });
  }
};

/* Music details update by id */
const updateMusic = async (req, res) => {
  try {
    const musicId = req.params.musicId;
    const getDetails = await musicService.updateMusic(musicId);
    if (!getDetails) {
      throw new Error("Music not Found!");
    }

    await musicService.updateMusic(musicId, req.body);

    res.status(200).json({
      success: true,
      message: "Music details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete music */
const deleteMusic = async (req, res) => {
  try {
    const musicId = req.params.musicId;
    const getDetails = await musicService.getMusicById(musicId);
    if (!getDetails) {
      throw new Error("Music not Found!");
    }

    await musicService.deleteMusic(musicId);

    res.status(200).json({
      success: true,
      message: "Music delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createMusic,
  getMusicList,
  getMusicById,
  updateMusic,
  deleteMusic,
};
