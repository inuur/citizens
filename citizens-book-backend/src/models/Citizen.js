const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitizenSchema = new mongoose.Schema({
    name: String,
    city_id: {
        $type: Schema.Types.ObjectId,
        ref: "City"
    },
    groups: [
        {
            type: String,
            name: String
        }
    ]
}, {typeKey: "$type"});

module.exports = mongoose.model("Citizen", CitizenSchema);