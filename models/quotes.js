const mongoose = require("../db/connection");

const quoteSchema = new mongoose.Schema({

    "quote of the day": String,
    quotes: [
        {   
            day: String,
            quote: String,
            mood: [String],
            author: String,
            imageURL: String
        }
    ]
})

module.exports = mongoose.model("Quotes", quoteSchema)