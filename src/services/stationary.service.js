const { Stationary } = require("../models");

/* Creat stationary
 * @param {object} reqBody
 * @returns {promise<stationary>} */
const createStationary = async (reqBody) => {
  return Stationary.create(reqBody);
};

/* Get stationary list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Stationary>} */
const getStationary = async () => {
  return Stationary.find({ $or: [{ product_price: { $gt: 250 } }] }).populate("product", {product_name:1});
};

/* Get stationary details by id
 * @param {ObjectId} stationaryId
 * @returns {Promise<Stationary>} */
const getStationaryById = async (stationaryId) => {
  return Stationary.findById(stationaryId);
};

/* stationary details update by id
 * @param {ObjectId} stationaryId
 * @param {object} updateBody
 * @returns {Promise<Stationary>} */
const updateDetails = async (stationaryId, updateBody) => {
  return Stationary.findByIdAndUpdate(stationaryId, { $set: updateBody });
};

/* Delete stationary
 * @param {ObjectId} stationaryId
 * @returns {Promise<Stationary>} */
const deleteStationary = async (stationaryId) => {
  return Stationary.findByIdAndDelete(stationaryId);
};

module.exports = {
  createStationary,
  getStationary,
  getStationaryById,
  updateDetails,
  deleteStationary,
};
