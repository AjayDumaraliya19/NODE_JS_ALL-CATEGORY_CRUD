const express = require("express");
const { movieValiation } = require("../../validations");
const { movieController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create Movie */
router.post(
    "/create-movie",
    validate(movieValiation.createMovie),
    movieController.createMovie
);

/* Get Movie list */
router.get(
    "/movie-list",
    validate(movieValiation.getmovieList),
    movieController.getMovieList
);

/* Get Movie details by ID */
router.get(
    "/get-movie-details/:movieId",
    validate(movieValiation.getMovieById),
    movieController.getMovieById
);

/* Movie details update by id */
router.put(
    "/update-movie/:movieId",
    validate(movieValiation.updateMovie),
    movieController.updateMovie
);

/* Delete Movie */
router.delete(
    "/delete-movie/:movieId",
    validate(movieValiation.getMovieById),
    movieController.deleteMovie
);


module.exports = router;