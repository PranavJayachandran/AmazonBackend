const mongoose = require("mongoose");
const db =
  "mongodb+srv://Pranj:" + process.env.password + "@cluster0.yxvw9d0.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch((e) => {
    console.log(e);
  });
