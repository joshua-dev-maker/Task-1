const express = require("express");

const {
  createProduct,
  findProductVarieties,
  findProducts,
  deleteProduct,
  updateProduct,
} = require("../controllers/product.controller");
const productRouter = express.Router();

productRouter.post("/postProduct", createProduct);
productRouter.get("/findProducts", findProducts);
productRouter.get("/getVarieties", findProductVarieties);
productRouter.delete("/deleteProduct", deleteProduct);
productRouter.put("/updateProduct", updateProduct);

module.exports = { productRouter };
