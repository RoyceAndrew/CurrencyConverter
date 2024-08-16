import express from "express";
import exios from "axios";

const port = 3000;
const app = express();

app.listen(port, () => {
    console.log(`Your server has been listened on port ${port}`)
})