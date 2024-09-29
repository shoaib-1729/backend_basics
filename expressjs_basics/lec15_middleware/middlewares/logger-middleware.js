const Logger = (req, res, next) => {
    console.log("Logging...");
    // call the next middleware in the cycle
    next();
}

export { Logger }