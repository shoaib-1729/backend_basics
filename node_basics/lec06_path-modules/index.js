// Path Module
const path = require("path");

// using path module
// basename
// console.log(path.basename("C:\\Users\\shoai\\Desktop\\backend_basics\\chap_03/index.js"));
// file path
// console.log(__filename);
// console.log(path.basename(__filename));
// console.log(path.basename(__filename, '.js'));

// dirname method
// console.log(path.dirname("C:\\Users\\shoai\\Desktop\\backend_basics\\chap_03/index.js"));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));

//join method
// console.log(path.join('/search', 'label', 'course/python', 'oops', ' '));
// console.log(path.join('/search', 'label', 'course/python', 'oops', '..'));
// console.log(path.join(__dirname, "code", "allCode.js"));

// normalize method
// console.log(path.normalize('c:\\temp\\\\\\foo\\\\bar'));
// console.log(path.normalize('c:\\temp\\\\\\foo\\\\bar\\..\\'));
// console.log(path.win32.normalize('c:////temp\\\\/\\/\\/foo/bar'));

// parse method
console.log(path.parse(__dirname));
console.log(path.parse(__dirname).base);
console.log(path.parse(__dirname).name);

// isAbsolute (explore docs)