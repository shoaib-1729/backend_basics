import express from 'express'

const app = express()
const port = process.env.PORT || '3000'

// routes
app.get('/', (req, res) => {
    res.send('Home Page')
})

// app.all('/api/*', (req, res) => {
//     res.send("API Page")
// })

// app.all('*', (req, res) => {
//     res.send("Page Not Found...!!!")
// })


// app.all('/sabkuch', (req, res) => {
//     res.send('All method')
// })

// String Path
// app.get('/about', (req, res) => {
//     res.send('About Page')
// })

// app.get('/contact', (req, res) => {
//     res.send('Contact Page')
// })

// String Pattern Path
// app.get('/ab?cd', (req, res) => {
//     res.send("This route path will match the routes: acd and abcd")
// })

// Regular Expression Path
// app.get(/a/, (req, res) => {
//     res.send("This route path will match the route that contains: a")
// })

// One callback
// app.get('/cbexample1', (req, res) => {
//     res.send("One callback example")
// });

// More than One Callback
// app.get('/cbexample2', (req, res, next) => {
//     console.log("First Callback");
// // aage ke middleware function ko mauqa milega next likhne se (ab aap ki baari hai)
//     next();
// }, (req, res) => {
//     console.log("Second Callback")
//     res.send("More than One Callback Example")
// });

// An array of callbacks
// const cb1 = (req, res, next) => {
//     console.log("First Callback")
//     next()
// };
// const cb2 = (req, res, next) => {
//     console.log("Second Callback")
//     next()
// };
// const cb3 = (req, res) => {
//     console.log("Third Callback")
//     res.send("An Array of Callback Example")
// };
// app.get("/cbexample3", [cb1, cb2, cb3])

// Combination of Independent Function and Array of Functions
// const cb1 = (req, res, next) => {
//     console.log("First Callback")
//     next()
// };
// const cb2 = (req, res, next) => {
//     console.log("Second Callback")
//     next()
// };
// app.get("/cbexample4", [cb1, cb2], (req, res, next) => {
//     console.log("Third Callback");
//     next();
// }, (req, res) => {
//     console.log("Fourth Callback");
//     res.send("Combination of Independent Function and Array of Functions")
// });

// Chained Route Callback
// app.route("/student")
//     .get((req, res) => {
//         console.log("GET Method")
//         res.send("All Student")
//     })
//     .post((req, res) => {
//         console.log("POST Method")
//         res.send("Add New Student")
//     })
//     .put((req, res) => {
//         console.log("PUT Method")
//         res.send("Update Student")
//     });

//  validation on requests using all method and chained routes
app.route("/student")
    .all((req, res) => {
        console.log("Run for All HTTP ")
        next()
    })
    .get((req, res) => {
        console.log("GET Method")
        res.send("All Student")
    })
    .post((req, res) => {
        console.log("POST Method")
        res.send("Add New Student")
    })
    .put((req, res) => {
        console.log("PUT Method")
        res.send("Update Student")
    });

// Messy Code (Need of router middleware)

// All Student Routes
// app.get("/student/all", (req, res) => {
//     res.send("All Student")
// });
// app.post("/student/create", (req, res) => {
//     res.send("New student Created")
// });
// app.put("/student/update", (req, res) => {
//     res.send("Student Updated")
// });
// app.delete("/student/all", (req, res) => {
//     res.send("Student Deleted")
// });

// All Teacher Routes
// app.get("/teacher/all", (req, res) => {
//     res.send("All Teacher")
// });
// app.post("/teacher/create", (req, res) => {
//     res.send("New Teacher Created")
// });
// app.put("/teacher/update", (req, res) => {
//     res.send("Teacher Updated")
// });
// app.delete("/teacher/all", (req, res) => {
//     res.send("Teacher Deleted")
// });

// listen at port
app.listen(port, () => {
    console.log(`Server is listening at port http://localhost:${port}`);
});