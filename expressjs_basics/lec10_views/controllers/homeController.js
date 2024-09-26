import { join } from "path"

const homeController = (req, res) => {
    // separate presentation logic from application logic
    // html yaha kyun inject kar rahe, dymanic poora page load karna hoga tab problem hogi, isiliye presentation logic ko separate karne ke liye views ka use karte hai
    // res.send("<h1>This is Home Page</h1>")
    // make the file path using join method
    // res.sendFile("C:\\Users\\shoai\\Desktop\\backend_basics\\expressjs_basics\\lec09_views\\views\\index.html")
    res.sendFile(join(process.cwd(), "views", "index.html"))
}

export { homeController }