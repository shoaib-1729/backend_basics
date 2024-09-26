import express from "express"
import web from "./routes/web.js"
import { join } from 'path';

// server
const app = express()

// port
const PORT = process.env.PORT || "3000"

// routes
// using middleware
app.use("/", web)

// serve static files
app.use(express.static(join(process.cwd(), "public")))

// set up directory where template/view files are located
// app.set("views", "./views")

// set up the template engine to use
app.set("view engine", "ejs")

// listen on the server at port
app.listen(PORT, () => {
    console.log(`Server is listening at port https://localhost:${PORT}`);
})