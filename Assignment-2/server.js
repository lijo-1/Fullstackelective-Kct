const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const data = {
    "id": 1,
    "title": "Inception",
    "director": "Christofer Nolan",
    "year": 2010,
    "poster": "Inception.jpeg"
};


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static'));

app.get("/", (req, res) => {
    res.render("forms.ejs", { data: data });  // Pass data to the template
});

console.log("Server is running")
