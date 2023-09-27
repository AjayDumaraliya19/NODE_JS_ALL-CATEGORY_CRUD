const { Bus } = require("../models");

/* Create bus
 * @param {object} reqBody
 * @returns {Promise<Bus>} */
const createbus = async (reqBody) => {
  return Bus.create(reqBody);
};

/* Get bus list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Bus>} */
const getbusList = async () => {
  return Bus.find({
    $or: [{ is_active: true }, { bus_stop: "kamrej" }],
  }).populate(travel);
};

/* Get bus details by id
 * @param {ObjectId} busId
 * @returns {Promise<Bus>} */
const getbusById = async (busId) => {
  return Bus.findById(busId);
};

/* bus details update by id
 * @param {ObjectId} busId
 * @param {object} updateBody
 * @returns {Promise<Bus>} */
const updateBusDetails = async (busId, updateBody) => {
  return Bus.findByIdAndUpdate(busId, { $set: updateBody }); // Object Get only
  // return Bus.updateOne(busId, { $set: updateBody}); // Get only one value
};

/* Delete bus
 * @param {ObjectId} busId
 * @returns {Promise<Bus>} */
const deletebus = async (busId) => {
  return Bus.findByIdAndDelete(busId);
};

module.exports = {
  createbus,
  getbusList,
  getbusById,
  updateBusDetails,
  deletebus,
};
