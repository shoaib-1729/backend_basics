// Import and Export - Common JS

// single import
// const name = require("./student.js")
// console.log(name);

// multiple import
const { nm, marks } = require("./student.js")
console.log(nm);
marks(10, 20)