// const express = require("express")
import express from "express"
import web from "./routes/web.js"

// express app server
const app = express()
    // port
const PORT = process.env.PORT || "8000"

// load router file
app.use("/", web)


// listen at port
app.listen(PORT, () => {
    console.log(`Server is listening at port http://localhost:${PORT}`);
})