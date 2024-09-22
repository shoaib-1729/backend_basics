// const express = require("express")
import express from "express"
import student from "./routes/student.js"

// express app server
const app = express()
    // port
const PORT = process.env.PORT || "4000"

// routes
app.use("/student", student)

// listen at port
app.listen(PORT, () => {
    console.log(`Server is listening at port http://localhost:${PORT}`);
})