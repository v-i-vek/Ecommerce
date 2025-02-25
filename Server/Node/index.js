const express = require("express")
const mongoose  = require("mongoose")
require("dotenv").config();

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to database");
    } catch (err) {
        console.log(`Error connecting to database${err}`);
    }
};
connectToDatabase();

