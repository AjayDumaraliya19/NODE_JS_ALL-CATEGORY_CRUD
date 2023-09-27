const Joi = require("joi");

/** Create Banner Validation */
const createBanner = {
  body: Joi.object({
    banner_name: Joi.string().required().trim(),
    banner_image: Joi.string().allow(""),
    banner_dis: Joi.string().optional(),
    product: Joi.string().required().trim(),
  }),
};

// /** Get Banner Details Validation */
// const getBannerDetails = {
//   params: Joi.object({
//     productId: Joi.string().required().trim(),
//   }),
// };

// /** Get Banner list validation */
// const getBannerList = {
//   query: Joi.object(),
// };

// /** Update Banner Details Valdation */
// const updateBanner = {
//   params: Joi.object({
//     productId: Joi.string().required().trim(),
//   }),
//   body: Joi.object({
//     banner_name: Joi.string().required().trim(),
//     banner_image: Joi.string().allow(""),
//     banner_dis: Joi.string().optional(),
//     product: Joi.string().required().trim(),
//   }),
// };

module.exports = {
  createBanner,
  //   getBannerDetails,
  //   getBannerList,
  //   updateBanner,
};
