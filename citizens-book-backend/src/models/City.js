const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
    name: String,
    data: String,
});

module.exports = mongoose.model("City", CitySchema);