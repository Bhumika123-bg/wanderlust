const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },

    price: {
        type: Number
    },

    location: {
        type: String
    },

    country: {
        type: String
    }

});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
