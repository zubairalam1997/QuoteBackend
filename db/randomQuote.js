const mongoose = require("mongoose");
const quoteSchema = new mongoose.Schema(
    {
       
        quoteText: String,
        quoteAuthor: String,
       
    });

    module.exports = mongoose.model("randomQuotes", quoteSchema);