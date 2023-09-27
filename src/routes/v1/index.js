const express = require("express");
const userRoutes = require("./user.route");
const categoryRoutes = require("./category.route");
const productRoutes = require("./product.route");
const bookRoutes = require("./book.route");
const stationaryRoutes = require("./stationary.route");
const busRoutes = require("./bus.route");
const hotelRoutes = require("./hotel.route");
const schoolRoutes = require("./school.route");
const travelRoutes = require("./travel.route");
const pharmacyRoutes = require("./pharmacy.route");
const jewellaryRoutes = require("./jewellary.route");
const movieRoutes = require("./movie.route");
const musicRoutes = require("./music.route");
const groceryRoutes = require("./grocery.route");
const bannerRoutes = require("./banner.route");

const router = express.Router();

router.use("/user", userRoutes);
router.use("/product", productRoutes);
router.use("/category", categoryRoutes);
router.use("/books", bookRoutes);
router.use("/stationary", stationaryRoutes);
router.use("/bus", busRoutes);
router.use("/hotel", hotelRoutes);
router.use("/school", schoolRoutes);
router.use("/travel", travelRoutes);
router.use("/pharmacy", pharmacyRoutes);
router.use("/jewellary", jewellaryRoutes);
router.use("/movie", movieRoutes);
router.use("/music", musicRoutes);
router.use("/grocery", groceryRoutes);
router.use("/banner", bannerRoutes);

module.exports = router;
