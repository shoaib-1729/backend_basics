import EventEmitter from "events"

// creating class
class MyEmitter extends EventEmitter {}

// creating object
const myEmitterObj = new MyEmitter()

// example 1
// registering event listener using 'on' method
myEmitterObj.on("event", function() {
        console.log("An event occurred...!!!");
    })
    // trigger/fire/emit  the event that we have defined using emit
myEmitterObj.emit("event")
myEmitterObj.emit("event")

// example 2
// problem with emit method
// let count = 0;
// myEmitterObj.on("event", function() {
//     console.log(++count);
// })
// myEmitterObj.emit("event")
// myEmitterObj.emit("event")

// example 3
// emit the event only once using 'once' method
// let count = 0;
// myEmitterObj.once("event", function() {
//         console.log(++count);
//     })
// event will trigger only once
// myEmitterObj.emit("event")
// myEmitterObj.emit("event")