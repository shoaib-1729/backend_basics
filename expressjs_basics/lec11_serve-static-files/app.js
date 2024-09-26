import express from 'express';
import { join } from "path"
import web from "./routes/web.js"


// create server
const app = express()
    // port
const PORT = process.env.PORT || "3000"

// server static files using middleware
// console.log(join(process.cwd(), "public"));
// app.use(express.static(join(process.cwd(), "public")))
// with virtual path
// app.use('/static', express.static(join(process.cwd(), "public")))

// only specific folder server karna hai
// app.use('/css', express.static(join(process.cwd(), "public/css")))
// for photo
// app.use('/images', express.static(join(process.cwd(), "public/images")))
// for js
// app.use('/js', express.static(join(process.cwd(), "public/js")))

// options
// const options = {
//     // by default public folder mei 'dotfiles' ko ignore karta hai
//     dotfiles: "allow",
// }

// app.use(express.static(join(process.cwd(), "public"), options))


// load router
app.use("/", web)

// listen at port
app.listen(PORT, () => {
    console.log(`Server is listening at port http://localhost:${PORT}`);
})