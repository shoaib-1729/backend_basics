import http from "http";

// creating web server using http
const server = http.createServer((req, res) => {
    // request
    // console.log(req.url);
    if (req.url !== "/favicon.ico") {
        console.log(req.url);
    }
    // request method
    // console.log(req.method);
    // response
    // res.statusCode = 202;
    // res.statusMessage = "Good";
    // res.setHeader("Content-Type", "text/plain")
    // set the above three at one
    res.writeHead("202", "Good", { "Content-Type": "text/plain" })
    res.end("Response from Sever")
})

// making the port and host dynamic
const PORT = process.env.PORT || 8000;
const HOST = "localhost";

// listening on port
server.listen(PORT, HOST, () => {
    console.log("Server is running at http://localhost:8000");
})