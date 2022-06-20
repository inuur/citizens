const router = require("express").Router();
const citizenService = require("../service/citizen-service");
const config = require("../config");

router.get("/citizens", async (req, res) => {
    citizenService.getAllCitizens()
        .then(data => {
            res.json({
                "citizens": data,
                "meta": {
                    "fields": config.dataFields
                }
            });
        });
});

module.exports = router;