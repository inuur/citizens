const Citizen = require("../models/Citizen");
const {prepareData} = require("../utils/utils");
const dataFields = require("../config").dataFields;

class CitizenService {
    getAllCitizens() {
        const filters = [];
        for (const field of dataFields) {
            filters.push({
                $eq: ["$$item.type", field]
            });
        }

        return Citizen.aggregate([
            {$match: {}},
            {
                $project: {
                    name: "$name",
                    city: "$city_id",
                    groups: {
                        $filter: {
                            input: "$groups",
                            as: "item",
                            cond: {
                                $or: filters
                            }
                        }
                    }
                }
            },
            {
                $lookup: {
                    from: "cities",
                    localField: "city",
                    foreignField: "_id",
                    as: "city"
                }
            },
            {$set: {"city": {$first: "$city"}}}
        ]).then(data =>
            prepareData(data)
        );
    }
}

module.exports = new CitizenService();