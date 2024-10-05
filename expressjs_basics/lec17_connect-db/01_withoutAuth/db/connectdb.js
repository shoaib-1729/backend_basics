import mongoose from "mongoose"

// using promises
const connectDB = (DATABASE_URL) => {
    return mongoose.connect(DATABASE_URL)
        .then(() => {
            console.log("Server connected to DB...");
        })
        .catch((error) => {
            console.error(error);
        });
};

export default connectDB