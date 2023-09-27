const { bannerService } = require("../services");
const fs = require("fs");

/** Create Banner Controller */
const creaetBanner = async (req, res) => {
  try {
    const reqBody = req.reqBody;

    if (req.file) {
      reqBody.banner_image = req.file.filename;
    } else {
      throw new Error("Banner image is required!");
    }

    const banner = await bannerService.creaetBanner(reqBody);

    res.status(200).json({
      success: true,
      message: "Image create successfully!",
      data: banner,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message: error?.message || "Something went wrong!",
    });
  }
};

module.exports = {
  creaetBanner,
};
