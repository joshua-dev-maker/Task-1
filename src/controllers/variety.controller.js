const Variety = require("../models/varieties.model");

const createVariety = async (req, res, next) => {
  try {
    const { size, color, quantity, price, image } = req.body;
    const newVariety = new Variety(
      { size, color, quantity, image, price });
    await newVariety.save();
    return res.status(201).json({
      newVariety,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = { createVariety };
