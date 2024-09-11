// File System - Callback API (asynchronous)
import * as fs from "fs"

// create directory
fs.mkdir("C:\\Users\\shoai\\Desktop\\backend_basics\\chap_05\\test", (error) => {
    if (error) {
        throw error
    }
    console.log("Directory created...")
})

// create directory with recursive parameter
// fs.mkdir("C:\\Users\\shoai\\Desktop\\backend_basics\\chap_05\\test\\demo", { "recursive": true }, (error) => {
//     if (error) {
//         throw error
//     }
//     console.log("Directory created...")
// })

// read directory
// fs.readdir("C:\\Users\\shoai\\Desktop\\backend_basics\\chap_05\\test", (error, files) => {
//     if (error) {
//         throw error
//     }
//     // read file content inside 'files'
//     for (const file of files) {
//         console.log(file);
//     }
// })

// Remove directory - Directory should be empty
// fs.rmdir("C:\\Users\\shoai\\Desktop\\backend_basics\\chap_05\\test\\demo", (error) => {
//     if (error) {
//         throw error;
//     }
//     console.log("Directory Removed...");
// })

// Create and write file
// fs.writeFile("readme.txt", "Hello Node JS", (error) => {
//     if (error) {
//         throw error
//     }
// })

// read file (returns buffer data)
// fs.readFile("readme.txt", (error, data) => {
//         if (error) {
//             throw error
//         }
//         console.log(data);
//     })
// with encoding (string data)
// fs.readFile("readme.txt", "utf-8", (error, data) => {
//     if (error) {
//         throw error
//     }
//     console.log(data);
// })

// append file
// fs.appendFile("readme.txt", "\nHello Express", (error) => {
//     if (error) {
//         throw error
//     }
//     console.log("Data Appended...");
// })

// copy file
// fs.copyFile("readme.txt", "info.txt", (error) => {
//     if (error) {
//         throw error
//     }
//     console.log("File Copied...");
// })

// get file information
// fs.stat("C:\\Users\\shoai\\Desktop\\backend_basics\\chap_05\\test", (error, stats) => {
//     if (error) {
//         throw error
//     }
//     console.log(stats);
//     console.log(stats.isDirectory());
//     console.log(stats.isFile());
// })