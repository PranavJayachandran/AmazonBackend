const mongoose = require("mongoose");

const imagesSchema = {
  name: String,
  imglink: String,
};
const Images = mongoose.model("Images", imagesSchema);
module.exports = { Images };
