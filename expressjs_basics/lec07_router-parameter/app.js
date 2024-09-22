// const express = require("express")
import express from "express"

// express app server
const app = express()
    // port
const PORT = process.env.PORT || "3000"

// routes
// string path
app.get("/student/all", (req, res) => {
        res.send("Response OK for all students")
    })
    // path with route parameter
    // app.get("/student/:id", (req, res) => {
    //     console.log(req.params);
    //     // destructuring the params
    //     const { id } = req.params;
    //     res.send(`Response OK for student id:${id}`)
    // })

// multiple route parameters
// app.get("/product/:category/:name", (req, res) => {
//         console.log(req.params);
//         // destructuring the params
//         const { category, name } = req.params;
//         res.send(`Response OK for product in category: ${category} with name: ${name}`)
//     })
// more examples
// app.get("/travel/:from-:to", (req, res) => {
//         console.log(req.params);
//         // destructuring the params
//         const { from, to } = req.params;
//         res.send(`Response OK for travel from: ${from} to: ${to}`)
//     })

// app.get("/distance/:cityOne.:cityTwo", (req, res) => {
//         console.log(req.params);
//         // destructuring the params
//         const { cityOne, cityTwo } = req.params;
//         res.send(`Response OK for distance between: ${cityOne} and ${cityTwo}`)
//     })


// Query String
// yaha pe path same rahega, query string path mei nahi count hoti, woh bss url pr hit kari jaati hai
app.get("/grocery", (req, res) => {
        const { category, page } = req.query
        res.send(`Response OK for groceries in category:${category} and page ${page}`)

    })
    // listen at port
app.listen(PORT, () => {
    console.log(`Server is listening at port http://localhost:${PORT}`);
})