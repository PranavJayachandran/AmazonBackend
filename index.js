const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

const imagesSchema = {
  name: String,
  imglink: String,
  type: String,
  price: Number,
};
const Images = mongoose.model("Images", imagesSchema);
require("./db/database");

app.post("/add", async (req, res) => {
  const blog = new Images({
    name: "HomeDecor-9",
    imglink:
      "https://drive.google.com/file/d/16-hbS5KxKtqteIFk20KgDbnnxf9Ue2Ij/view?usp=share_link",
    type: "Decor",
    price: 19999,
  });
  blog
    .save()
    .then((blog) => {
      res.status(201).send(blog);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get("/search/all/:item", async (req, res) => {
  var regex = new RegExp(req.params.item, "i");
  res.send(await Images.find({ $or: [{ name: regex }, { type: regex }] }));
});
app.get("/search/name/:item", async (req, res) => {
  var regex = new RegExp(req.params.item, "i");
  res.send(await Images.find({ name: regex }));
});
app.get("/search/type/:item", async (req, res) => {
  var regex = new RegExp(req.params.item, "i");
  res.send(await Images.find({ type: regex }));
});

app.get("/Men", async (req, res) => {
  const result = await Images.find({ type: "Men" });
  res.send(result);
});

app.get("/Women", async (req, res) => {
  const result = await Images.find({ type: "Women" });
  res.send(result);
});

app.get("/Gromming", async (req, res) => {
  const result = await Images.find({ type: "Gromming" });
  res.send(result);
});
app.get("/Footwear", async (req, res) => {
  const result = await Images.find({ type: "Footwear" });
  res.send(result);
});
app.get("/Smart-TV", async (req, res) => {
  const result = await Images.find({ type: "Smart-TV" });
  res.send(result);
});
app.get("/Mobile", async (req, res) => {
  const result = await Images.find({ type: "Mobile" });
  res.send(result);
});
app.get("/Decor", async (req, res) => {
  const result = await Images.find({ type: "Decor" });
  res.send(result);
});

app.get("/:id", async (req, res) => {
  const result = await Images.findOne({ _id: req.params.id });
  res.send(result);
});

app.listen(5000, () => {
  console.log("Server is Running");
});

module.exports = app;
