class StudentController {
    // set cookies
    static setCookies = (req, res) => {
            // set session cookies (set humesha server karega, isiliye response)
            res.cookie("username", "geekyshows");
            res.cookie("cart", 5);

            // persistent cookies (joh kuch time ke baad expire ho, browser close hone par nahi unlike session cookies joh session khatam hone ke baad expire ho jaati hai for example bank sites)
            // persistent cookie mei sensitive data nhi rakhna chahiye, secure nhi hota, session mei rakh sakte hai
            // res.cookie("username", "geekyshows", { maxAge: 10000 });
            res.send("Cookies Set...");
        }
        // get cookies
    static getCookies = (req, res) => {
            console.log(req.cookies);
            // get session cookies (get humesha client ke machine se hoga, isiliye request)
            res.send("Cookies Get...");
        }
        // delete cookies
    static deleteCookies = (req, res) => {
        // clear cookies
        res.clearCookie("username")
        res.send("Cookies Deleted...")
    }
}

export default StudentController