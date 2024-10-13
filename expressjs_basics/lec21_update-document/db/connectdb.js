import mongoose from "mongoose"


// using async-await
const connectDB = async(DATABASE_URL) => {
    const DB_OPTIONS = {
        dbName: "schooldb",
    }
    try {
        await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        console.log("Server connected to DB...");
    } catch (err) {
        console.log(err);
    }
}

export default connectDB