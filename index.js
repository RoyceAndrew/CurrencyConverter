import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/result", async (req, res) => {
    try {
    const check = await axios.get("https://api.frankfurter.app/latest?amount="+req.body.amount+"&from="+req.body.from+"&to="+req.body.to);
    const result = check.data;
    const currency = req.body.to;
    const exchangeRate = result.rates[currency];
    res.render("index.ejs", { rslt: `${exchangeRate} ${currency}` });
    //res.render(index.ejs, {rslt: result.req.body.to})
    console.log 
    } catch(error) {
    res.render("index.ejs", { rslt: `The currency should be diff` });
    }
    
})

app.listen(port, () => {
    console.log(`Your server has been listened on port ${port}`)
})