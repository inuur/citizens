const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
} = process.env;

module.exports = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
    dataFields: [
        "city",
        "district",
        "street",
    ]
};