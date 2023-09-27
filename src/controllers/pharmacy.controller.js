const { pharmacyService } = require("../services");

/* Create pharmacy */
const createPharmacy = async (req, res) => {
  try {
    const reqBody = req.body;

    const pharmacy = await pharmacyService.createPharmacy(reqBody);
    if (!pharmacy) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Pharmacy create successfully!",
      data: pharmacy,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get pharmacy list */
const getPharmacyList = async (req, res) => {
  try {
    const getList = await pharmacyService.getPharmacyList();

    res.status(200).json({
      success: true,
      message: "Get pharmacy list Successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get pharmacy details by id */
const getPharmacyById = async (req, res) => {
  try {
    const pharmacyId = req.params.pharmacyId;
    const getDetails = await pharmacyService.getPharmacyById(pharmacyId);
    if (!getDetails) {
      throw new Error("Pharmacy not Found!");
    }

    res.status(200).json({
      success: true,
      message: "Pharmacy details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, meassage: error.message });
  }
};

/* Pharmacy details update by id */
const updatePharmacy = async (req, res) => {
  try {
    const pharmacyId = req.params.pharmacyId;
    const getDetails = await pharmacyService.getPharmacyById(pharmacyId);
    if (!getDetails) {
      throw new Error("Pharmacy not Found!");
    }

    await pharmacyService.updatePharmacy(pharmacyId, req.body);

    res.status(200).json({
      success: true,
      message: "Pharmacy details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete pharmacy */
const deletePharmacy = async (req, res) => {
  try {
    const pharmacyId = req.params.pharmacyId;
    const getDetails = await pharmacyService.getPharmacyById(pharmacyId);
    if (!getDetails) {
      throw new Error("Pharmacy not Found!");
    }

    await pharmacyService.deletePharmacy(pharmacyId);

    res.status(200).json({
      success: true,
      message: "Pharmacy delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createPharmacy,
  getPharmacyList,
  getPharmacyById,
  updatePharmacy,
  deletePharmacy,
};