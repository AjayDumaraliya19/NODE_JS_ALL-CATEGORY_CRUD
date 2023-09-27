const { movieService } = require("../services");

/* Create movie */
const createMovie = async (req, res) => {
  try {
    const reqBody = req.body;

    const movie = await movieService.createMovie(reqBody);
    if (!movie) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Movie create  successfully!",
      data: movie,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get movie list */
const getMovieList = async (req, res) => {
  try {
    const getList = await movieService.getmovieList();

    res.status(200).json({
      success: true,
      message: "Get movie list Successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get movie details by id */
const getMovieById = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const getDetails = await movieService.getMovieById(movieId);
    if (!getDetails) {
      throw new Error("Movie not Found!");
    }

    res.status(200).json({
      success: true,
      message: "Movie details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, meassage: error.message });
  }
};

/* Movie details update by id */
const updateMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const getDetails = await movieService.getMovieById(movieId);
    if (!getDetails) {
      throw new Error("Movie not Found!");
    }

    await movieService.updateMovie(movieId, req.body);

    res.status(200).json({
      success: true,
      message: "Movie details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete movie */
const deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const getDetails = await movieService.getMovieById(movieId);
    if (!getDetails) {
      throw new Error("Movie not Found!");
    }

    await movieService.deleteMovie(movieId);

    res.status(200).json({
      success: true,
      message: "Movie delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createMovie,
  getMovieList,
  getMovieById,
  updateMovie,
  deleteMovie,
};
