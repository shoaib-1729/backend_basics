// const express = require("express");
import express from 'express';
import session from 'express-session'
import web from "./routes/web.js"

// create server
const app = express()
    // port
const PORT = process.env.PORT || "3000"

// session configuration using express-session middleware
app.use(session({
    name: 'geeky-session',
    secret: 'iam-secret-key',
    resave: 'false',
    saveUninitialized: true,
    cookie: {
        maxAge: 200000
    }
}))

// load router
app.use("/", web)


// listen at port
app.listen(PORT, () => {
    console.log(`Server is listening at port http://localhost:${PORT}`);
})