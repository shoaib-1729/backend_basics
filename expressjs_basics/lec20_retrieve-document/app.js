import express from 'express';
import { getAllDocs, getDocsSpecificFields, getSingleDoc, getDocByField, skipDoc, limitDoc, getDocCount, getDocByMixedQuery, getDocByComparisonQuery, getDocByLogicalQuery } from "./models/Student.js"
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

// read documents
// getAllDocs();
// getDocsSpecificFields()
// getSingleDoc("67018b9f8bd7e44a4dbf0043")
// getDocByField()
// skipDoc()
// limitDoc()
// getDocCount()
// getDocByMixedQuery()
// getDocByComparisonQuery()
getDocByLogicalQuery()

// listen at port
app.listen(PORT, () => {
    console.log(`Server is listening at port http://localhost:${PORT}`);
})