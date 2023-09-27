const Joi = require("joi");

/* Create movie */
const createMovie = {
  body: Joi.object().keys({
    title: Joi.string().required().trim(),
    director: Joi.string().required().trim(),
    releaseYear: Joi.number().integer().required(),
    rating: Joi.number().integer().required(),
  }),
};

/* Get movie list */
const getmovieList = {
  query: Joi.object().keys(),
};

/* Get movie details by id */
const getMovieById = {
  params: Joi.object().keys(),
};

/* Movie details update by id */
const updateMovie = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    title: Joi.string().required().trim(),
    director: Joi.string().required().trim(),
    releaseYear: Joi.number().integer().required(),
    rating: Joi.number().integer().required(),
  }),
};

module.exports = {
    createMovie,
    getmovieList,
    getMovieById,
    updateMovie
};
