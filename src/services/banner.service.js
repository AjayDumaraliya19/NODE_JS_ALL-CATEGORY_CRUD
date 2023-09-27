const { Banner } = require("../models");

/** Create Banner service */
const createBanner = async (reqBody) => {
  return Banner.create(reqBody);
};

module.exports = {
  createBanner,
};
