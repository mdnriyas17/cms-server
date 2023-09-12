const mongoose = require("mongoose");

const connectDB = async () => {
  return mongoose
    .connect('mongodb+srv://mdnriyas:mdnriyas@website.jda6y4x.mongodb.net/CMS')
    .then(() => console.log(`connection to database established...`))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
