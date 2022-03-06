const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const varietiesSchema = new Schema(
  {
    size: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    image: [{
      type: String,
      required: true,
    }],
    price: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Variety = mongoose.model("Variety", varietiesSchema);
module.exports = Variety;
