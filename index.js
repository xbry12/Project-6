const express = require("express");
const app = express();
const Quotes = require("./models/quotes")
const parser = require("body-parser");
// const cors = require("cors");

app.use(parser.json());

app.get("/quotes", (req, res) => {
    Quotes.find({}).then(quotes => {
        res.json(quotes)
    })
})
app.post("/quotes", (req, res) => {
    Quotes.create(req.body).then(quotes => {
        res.json(quotes)
    })
})
app.post("/quotes/:id/quote", (req, res) => {
    Quotes.findByIdAndUpdate(
        req.params.id,
        { $push: { quote: req.body } },
        { new: true }
    ).then(quotes => {
        res.json(quotes)
    })
})
app.get("/quotes/quote/:quote", (req, res) => {
    Quotes.find({ quote: req.params.quote }).then(quotes => {
        res.json(quotes)
    })
})
app.get("/quotes/:id", (req, res) => {
    Quotes.findById(req.params.id).then(quotes => {
        res.json(quotes)
    })
})
app.put("/quotes/:id", (req, res) => {
    Quotes.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    ).then(quotes => {
        res.json(quotes)
    })
})
app.delete("/quotes/:id", (req, res) => {
    Quotes.findOneAndRemove(
        { _id: req.params.id }
    ).then(quotes => {
        res.json(quotes)
    })
})
app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(` PORT: ${app.get("port")}`);
});

// app.listen(7000, () => {
//     console.log("Your server level is at 7000!")
// })