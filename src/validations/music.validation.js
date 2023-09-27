const Joi = require("joi");

/* Create music */
const createMusic = {
  body: Joi.object().keys({
    title: Joi.string().required().trim(),
    artist: Joi.string().required().trim(),
    album: Joi.string().required().trim(),
    releaseYear: Joi.number().integer().required(),
  }),
};

/* Get music list */
const getMusicList = {
  query: Joi.object().keys(),
};

/* Get music details by id */
const getMusicById = {
  params: Joi.object().keys(),
};

/* Music details update by id */
const updateMusic = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    title: Joi.string().required().trim(),
    artist: Joi.string().required().trim(),
    album: Joi.string().required().trim(),
    releaseYear: Joi.number().integer().required(),
  }),
};

module.exports = {
  createMusic,
  getMusicList,
  getMusicById,
  updateMusic,
};
