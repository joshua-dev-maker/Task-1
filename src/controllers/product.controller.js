const Product = require("../models/product.model");

const createProduct = async (req, res, next) => {
  try {
    const { productName, productDescription, _id } = req.body;
    const newProduct = new Product({
      productName,
      productDescription,
      Variety: _id,
    });
    await newProduct.save();
    return res.status(201).json({
      newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const findProductVarieties = async (req, res, next) => {
  try {
    const { id } = req.query;
    const allProductVarieties = await Product.find({ _id: id })
      .populate("Variety", { _id: 0, createdAt: 0, updatedAt: 0, __v: 0 })
      .select({ _id: 0, __v: 0 });
    return res.status(201).json({
      allProductVarieties,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const findProducts = async (req, res, next) => {
  try {
    const allProducts = await Product.find()
      .populate("Variety", { _id: 0, createdAt: 0, updatedAt: 0, __v: 0 })
      .select({ _id: 0, __v: 0 });
    return res.status(201).json({
      allProducts,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { _id } = req.body;
    const allProductsVarieties = await Product.findByIdAndDelete(
      { _id },
      req.body
    );
    return res.status(201).json({
      message: `The product with ID ${_id} has been successfully deleted.`,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { _id } = req.query;
    const updateProduct = await Product.findOneAndUpdate({ _id }, req.body, {
      new: true,
    })
      .populate("Variety", { _id: 0, createdAt: 0, updatedAt: 0, __v: 0 })
      .select({ _id: 0, __v: 0 });
    return res.status(201).json({
      updateProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
  findProductVarieties,
  findProducts,
  deleteProduct,
  updateProduct,
};
