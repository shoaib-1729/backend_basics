import express from "express"
import web from "./routes/web.js"
import student from "./routes/student.js"
import { Logger } from "./middlewares/logger-middleware.js"

// sever
const app = express()
    // port
const PORT = process.env.PORT || "3000"

// set view engine
app.set("view engine", "ejs")

// application level middleware
// yeh saare routes par execute hoga, global level pr
// without path
// app.use(Logger)
// path based
// app.use("/about", Logger)

// load routes
app.use("/", web)
app.use("/", student)

// listen on server at port
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})