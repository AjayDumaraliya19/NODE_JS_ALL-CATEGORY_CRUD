const { Travel } = require('../models');

/* Create travel
 * @param {object} reqBody
 * @returns {Promise<Travel>}  */
const createTravel = async (reqBody) => {
    return Travel.create(reqBody);
};

/* Get travel list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Travel>}*/
const getTravelList = async () => {
    return Travel.find({ $or: [{ review: {$lt: 4} }] });
};

/* Get travel details by id
 * @param {ObjectId} travelId
 * @returns {Promise<Travel>} */
const getTravelById = async (travelId) => {
    return Travel.findById(travelId);
};

/* travel details update by id
 * @param {ObjectId} travelId
 * @param {object} updateBody
 * @returns {Promise<Travel>} */
const updateTravel = async (travelId, updateBody) => {
    return Travel.findByIdAndUpdate(travelId, { $set: updateBody });
};

/* Delete travel
 * @param {ObjectId} travelId
 * @returns {Promise<Travel>} */
const deleteTravel = async (bookId) => {
    return Travel.findByIdAndDelete(bookId);
};

module.exports = {
    createTravel,
    getTravelList,
    getTravelById,
    updateTravel,
    deleteTravel
}