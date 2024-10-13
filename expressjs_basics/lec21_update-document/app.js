import express from 'express';
import createDoc from './models/Student.js';
import connectDB from "./db/connectdb.js";

// create server
const app = express()
    // port
const PORT = process.env.PORT || "3000"
    // db uri
    // const DATABASE_URL = process.env.DATABASE_URL || "mongodb://geekyshows:123456@localhost:27017/schooldb?authSource=schooldb"

// baaki cheezein options ke taur par pass kardo, isse cheezein expose ho jaa rahi hai
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"


// connect to db
connectDB(DATABASE_URL)
    // inserting  document
createDoc("Rahul", 20, 6500.50, ["running", "writing"], true, [{ value: "Learning MERN" }])

// listen at port
app.listen(PORT, () => {
    console.log(`Server is listening at port http://localhost:${PORT}`);
})