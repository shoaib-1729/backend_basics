// Import and Export - Common JS

// single export
// const nm = "Sonam"
//common js export
// module.exports = nm;

// multiple exports
const nm = "Sonam"
const marks = (math, phy) => {
        console.log(math + phy);
    }
    //common js export (using object, name should be same while importing these variables)
module.exports = { nm, marks };