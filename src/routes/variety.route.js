const express = require("express");
const { createVariety } = require("../controllers/variety.controller");
const { upload } = require("../../utils/multer");

const varietyRouter = express.Router();

varietyRouter.post(
  "/postVarieties",
  createVariety
);

module.exports = { varietyRouter };
