// File System - Promise API
import * as fs from 'fs/promises'


// Creating Directory - Path should be there

try {
    await fs.mkdir('C:\\Users\\shoai\\Desktop\\backend_basics\\chap_04\\geeky')
    console.log("Directory Created...");

} catch (error) {
    console.log(error);
}

// Creating Directory - Path is not required to be there

// try {
//     await fs.mkdir('C:\\Users\\shoai\\Desktop\\backend_basics\\chap_04\\test\\demo', { recursive: true })
//     console.log("Directory Created...");
// } catch (error) {
//     console.log(error);
// }

// Read content from directory
// try {
//     const files = await fs.readdir("C:\\Users\\shoai\\Desktop\\backend_basics\\chap_04\\test")
//     for (const file of files) {
//         console.log(file);
//     }

// } catch (error) {
//     console.log(error);

// }

// Remove directory - Directory should be empty
// try {
//     await fs.rmdir("C:\\Users\\shoai\\Desktop\\backend_basics\\chap_04\\test\\demo")
//     console.log("Directory Removed...");
// } catch (error) {
//     console.log(error);
// }

// Create and write file
// try {
//     await fs.writeFile("readme.txt", "Hello Node js")

// } catch (error) {
//     console.log(error);
// }

// Read file
// try {
//     // returns buffer data
//     // const data = await fs.readFile("readme.txt")
//     // mention the encoding if you want the real data
//     const data = await fs.readFile("readme.txt", "utf-8")
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }

// Append file
// try {
//     await fs.appendFile("readme.txt", "\nHello Express JS")
// } catch (error) {
//     console.log(error);
// }

// Copy  file
// try {
//     await fs.copyFile("readme.txt", "C:\\Users\\shoai\\Desktop\\backend_basics\\chap_04\\geeky\\info.txt")
// } catch (error) {
//     console.log(error);
// }

// Get file information
try {
    const stats = await fs.stat("C:\\Users\\shoai\\Desktop\\backend_basics\\chap_04\\test\\emp.js")
    console.log(stats);
    // is directory or file
    console.log(stats.isDirectory());
    console.log(stats.isFile());
} catch (error) {
    console.log(error);
}