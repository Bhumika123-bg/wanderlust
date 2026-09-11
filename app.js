const express = require("express");
const app = express();

const mongoose = require("mongoose");

const path = require("path");

const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";


// EJS Setup
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));


// MongoDB Connection
async function main() {

    await mongoose.connect(MONGO_URL);

    console.log("Connected to MongoDB");

}

main()
    .catch((err) => {

        console.log("MongoDB Error:", err);

    });


// Root Route
app.get("/", (req, res) => {

    res.send("Hii I am root");

});


// All Listings Route
app.get("/listings", async (req, res) => {

    try {

        const allListings = await Listing.find({});

        console.log("Number of listings:", allListings.length);

        res.render("listings/index.ejs", {
            allListings: allListings
        });

    } catch (err) {

        console.log("Error:", err);

        res.send("Something went wrong");

    }

});


// Server
app.listen(8000, () => {

    console.log("Server is listening on port 8000");

});
