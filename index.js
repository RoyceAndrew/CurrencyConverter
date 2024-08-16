import express from "express";
import exios from "axios";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/result", (req, res) => {
    console.log(req.body)
})

app.listen(port, () => {
    console.log(`Your server has been listened on port ${port}`)
})