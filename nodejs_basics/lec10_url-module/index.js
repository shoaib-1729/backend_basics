// url is a global object, import kiya bina bhi chalega
import { URL } from "url"

// Create a new URL object
const myUrl = new URL("https://www.example.com:8080/p/a/t/h?query=string#hash");

// Logs the URL hash (#hash)
console.log(myUrl.hash);

// Logs the host including port (www.example.com:8080)
console.log(myUrl.host);

// Logs the hostname without port (www.example.com)
console.log(myUrl.hostname);

// Logs the complete URL as a string
console.log(myUrl.href);

// Logs the path of the URL (/p/a/t/h)
console.log(myUrl.pathname);

// Logs the port number (8080)
console.log(myUrl.port);

// Logs the protocol (https:)
console.log(myUrl.protocol);

// Logs the query string (?query=string)
console.log(myUrl.search);

// Logs the URLSearchParams object
console.log(myUrl.searchParams);

// `toJSON` is not directly supported
console.log(myUrl.toJSON());

// Logs the URL as a string (same as href)
console.log(myUrl.toString());

// Logs the URL as a string (same as href)
console.log(myUrl.toString())