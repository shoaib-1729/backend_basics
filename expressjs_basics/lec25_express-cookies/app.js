// const express = require("express");
import express from 'express';
import web from "./routes/web.js"
import cookieParser from 'cookie-parser';

// create server
const app = express()
    // port
const PORT = process.env.PORT || "3000"

// cookie parser middleware
app.use(cookieParser())

// load router
app.use("/", web)

// listen at port
app.listen(PORT, () => {
    console.log(`Server is listening at port http://localhost:${PORT}`);
})