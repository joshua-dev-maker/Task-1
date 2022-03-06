const express = require("express");
const app = express();
const env = require("dotenv").config();
const PORT = process.env.PORT;
const { productRouter } = require("./routes/product.route");
const { varietyRouter } = require("./routes/variety.route");
const { connectDb } = require("../utils/db");
app.use(express.json());

app.use("/api/v1", productRouter);
app.use("/api/v1", varietyRouter);
connectDb();

app.post("/", (req, res) => {
  res.send("welcome!!!");
});

app.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`);
});
