const quotes = require("../models/quotes");
const quotesdata = require("./quotes.json");

quotes.deleteMany({}).then(() => {
  quotes
    .insertMany(quotesdata)
    .then((res) => {
      console.log(res);
      process.exit();
    });
});
