import express from "express";
import web from "./routes/web.js";
import { join } from "path";
import connectDB from "./db/connectdb.js";

// server
const app = express();

// port
const PORT = process.env.PORT || 3000;

// database url
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/"

// database connection
connectDB(DATABASE_URL)

// urlencoded middleware
app.use(express.urlencoded({ extended: false }))

// setup template engine
app.set("view engine", "ejs");

// serve static files
app.use("/student", express.static(join(process.cwd(), "public")));
app.use("/student/edit", express.static(join(process.cwd(), "public")));

// load routes
app.use("/student", web);

// listen at port
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});