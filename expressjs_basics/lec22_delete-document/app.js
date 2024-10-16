import express from 'express';
import connectDB from "./db/connectdb.js";
import { deleteDocByID, deleteOneDocByFilter, deleteManyDoc } from './models/Student.js';

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

// delete document
// deleteDocByID("67018b9f8bd7e44a4dbf0043")
// deleteOneDocByFilter("10768b9f8bd7e44a4dbf0043")
deleteManyDoc(40)

// listen at port
app.listen(PORT, () => {
    console.log(`Server is listening at port http://localhost:${PORT}`);
})