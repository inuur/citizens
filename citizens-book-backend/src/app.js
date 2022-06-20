const express = require("express"),
    mongoose = require("mongoose"),
    router = require("./router"),
    config = require("./config"),
    cors = require("cors");

const app = express(),
    port = config.PORT;

app.use(cors());
app.use(router);

mongoose.connect(config.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
});

// Insert test data into the database
const insertTestData = require("./test-data");
insertTestData();

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
