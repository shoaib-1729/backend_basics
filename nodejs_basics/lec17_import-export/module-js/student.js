// Import and Export - ES6 or Module JS

// single export
// const nm = "Sonam"
// in case of exporting single values, we can use default export
// export default nm;

// multiple export
const nm = "Sonam"
const marks = (math, phy) => {
        console.log(math + phy);
    }
    // in case of exporting muliple values, we can use named export in ES6, the name should be same while importing the values ex;ported using named exports
export { nm, marks };