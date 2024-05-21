import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express()

dotenv.config();

const PORT = process.env.PORT || 3000;

const URI = process.env.MONGODBURI

//connect to mongo db
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connected to mongo db");
} catch (error) {
    console.log("Error", error);
}

app.listen(PORT, () => {
    console.log(`SERVER listening on port ${PORT}`)
})