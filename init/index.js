const mongoose = require("mongoose");

const initData = require("./data.js");

const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";


// Connect to MongoDB
async function main() {

    await mongoose.connect(MONGO_URL);

    console.log("Connected to DB");

}


// Initialize database
const initDB = async () => {

    // Delete old listings
    await Listing.deleteMany({});

    // Insert sample listings
    await Listing.insertMany(initData.data);

    console.log("Data is initialized successfully");

};


// Run everything
main()
    .then(async () => {

        await initDB();

        await mongoose.connection.close();

        console.log("MongoDB connection closed");

    })
    .catch((err) => {

        console.log("ERROR:", err);

    });
