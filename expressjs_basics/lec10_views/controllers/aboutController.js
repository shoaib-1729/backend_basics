import { join } from "path"

const aboutController = (req, res) => {
    // res.send("<h1>This is About Page</h1>")
    // res.sendFile("C:\\Users\\shoai\\Desktop\\backend_basics\\expressjs_basics\\lec09_views\\views\\about.html")
    res.sendFile(join(process.cwd(), "views", "about.html"))

}

export { aboutController }