// const express = require("express");
import express from 'express';
import { join } from "path"
import web from "./routes/web.js"

// create server
const app = express()
    // port
const PORT = process.env.PORT || "3000"

// set up template engine
app.set("view engine", "ejs")

// set up middleware for static files
app.use(express.static(join(process.cwd(), "public")))

// load router
app.use("/", web)


// listen at port
app.listen(PORT, () => {
    console.log(`Server is listening at port http://localhost:${PORT}`);
})