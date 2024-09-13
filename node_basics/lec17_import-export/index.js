import http from "http";

// creating web server using http
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain")
    res.end("Response from Sever")
})

// making the port and host dynamic
const PORT = process.env.PORT || 8000;
const HOST = "localhost";

// listening on port
server.listen(PORT, HOST, () => {
    console.log("Server is running at http://localhost:8000");
})