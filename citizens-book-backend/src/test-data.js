const Citizen = require("./models/Citizen");
const City = require("./models/City");
const citizensData = require("./data/citizens.json");
const citiesData = require("./data/cities.json");

async function insertTestData() {

    const cityIdToObjectID = {};

    await City.deleteMany({});

    for (const city of citiesData) {
        const cityEntity = new City(city);
        const result = await cityEntity.save();
        cityIdToObjectID[city.id] = result._id;
    }

    // map each citizen city_id to city' ObjectID
    for (const citizen of citizensData) {
        citizen.city_id = cityIdToObjectID[citizen.city_id];
    }

    await Citizen.deleteMany({});
    await Citizen.insertMany(citizensData);
}

module.exports = insertTestData;