const { Movie } = require('../models');

/* Create movie
 * @param {object} reqBody
 * @returns {Promise<Movie>}  */
const createMovie = async (reqBody) => {
    return Movie.create(reqBody);
};

/* Get movie list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Movie>}*/
const getmovieList = async () => {
    return Movie.find({ $or: [{ is_active: true }] });
};

/* Get movie details by id
 * @param {ObjectId} movieId
 * @returns {Promise<Movie>} */
const getMovieById = async (movieId) => {
    return Movie.findById(movieId);
};

/* Movie details update by id
 * @param {ObjectId} movieId
 * @param {object} updateBody
 * @returns {Promise<Movie>} */
const updateMovie = async (movieId, updateBody) => {
    return Movie.findByIdAndUpdate(movieId, { $set: updateBody });
};

/* Delete movie
 * @param {ObjectId} movieId
 * @returns {Promise<Movie>} */
const deleteMovie = async (movieId) => {
    return Movie.findByIdAndDelete(movieId);
};

module.exports = {
    createMovie,
    getmovieList,
    getMovieById,
    updateMovie,
    deleteMovie
}