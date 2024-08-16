import express from "express";
import exios from "axios";

const port = 3000;
const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.listen(port, () => {
    console.log(`Your server has been listened on port ${port}`)
})