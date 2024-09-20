// First Express JS Application
// common js syntax
const express = require('express')

// making server from express
// 'app' node http server ko as a callback pass kiya jaata hai request ko handle karne ke liye
const app = express()

// defining port
const PORT = process.env.PORT || '3000'

// routes
app.get('/', function(req, res) {
    res.send("Hello World from Express..!!")
})

// listen on port
app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);

})