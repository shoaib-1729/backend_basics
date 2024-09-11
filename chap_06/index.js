// File System - Synchronous API
// no use of callback due to the synchronous and callback nature of api
import * as fs from "fs"

// Creating Directory - Path should be there
// fs.mkdirSync("C:\\Users\\shoai\\Desktop\\backend_basics\\chap_06\\test")

// Creating Directory - Path is not required to be there
// fs.mkdirSync("C:\\Users\\shoai\\Desktop\\backend_basics\\chap_06\\test\\demo", { "recursive": true })

// Read content from directory
// const files = fs.readdirSync("C:\\Users\\shoai\\Desktop\\backend_basics\\chap_06\\test")
// for (const file of files) {
//     console.log(file);
// }

// Remove directory - Directory should be empty
// fs.rmdirSync("C:\\Users\\shoai\\Desktop\\backend_basics\\chap_06\\test\\demo")

// Create and write file
// fs.writeFileSync("readme.txt", "Hello Node")

// Read file (returns buffer data)
// const data = fs.readFileSync("readme.txt")
// console.log(data);
// using encoding to return data in string
// const data = fs.readFileSync("readme.txt", "utf-8")
// console.log(data);

// Append File
// fs.appendFileSync("readme.txt", "\nHello Express JS")

// Copy file
// fs.copyFileSync("readme.txt", "info.txt")

// get file information
const stats = fs.statSync("C:\\Users\\shoai\\Desktop\\backend_basics\\chap_06\\test\\emp.js")
console.log(stats.isDirectory());
console.log(stats.isFile());
console.log(stats);