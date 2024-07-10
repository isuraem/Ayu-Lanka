const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

const URL = process.env.CUSTOMCONNSTR_MONGODB_URL;
console.log('URL', URL);

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
//connect database
connection.once("open", () => {
  console.log("Mongodb Connection Success !" , PORT);
});

const productRouter = require("./app/app");

app.use("/api",productRouter);

app.listen(PORT, () => {
    console.log(`server is up and running on port: ${PORT}`);
})