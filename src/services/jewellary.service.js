const { Jewellary } = require("../models");

/* Create jewellary
 * @param {object} reqBody
 * @returns {Promise<Jewellary>}  */
const createJewellary = async (reqBody) => {
  return Jewellary.create(reqBody);
};

/* Get jewellary list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Jewellary>}*/
const getJewellaryList = async () => {
  return Jewellary.find({ $or: [{ is_active: false }, { material: "gold" }] });
};

/* Get jewellary details by id
 * @param {ObjectId} jewellaryId
 * @returns {Promise<Jewellary>} */
const getJewellaryById = async (jewellaryId) => {
  return Jewellary.findById(jewellaryId);
};

/* Jewellary details update by id
 * @param {ObjectId} jewellaryId
 * @param {object} updateBody
 * @returns {Promise<Jewellary>} */
const updateJewellary = async (jewellaryId, updateBody) => {
  return Jewellary.findByIdAndUpdate(jewellaryId, { $set: updateBody });
};

/* Delete jewellary
 * @param {ObjectId} jewellaryId
 * @returns {Promise<Jewellary>} */
const deleteJewellary = async (jewellaryId) => {
  return Jewellary.findByIdAndDelete(jewellaryId);
};

module.exports = {
  createJewellary,
  getJewellaryList,
  getJewellaryById,
  updateJewellary,
  deleteJewellary,
};
