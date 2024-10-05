import mongoose from "mongoose"


// using async-await
const connectDB = async(DATABASE_URL) => {
    const DB_OPTIONS = {
        user: "geekyshows",
        pass: "123456",
        // us db ka naam jisko user access kar sakta hai
        dbName: "schooldb",
        // us db ka naam jismei user create hua hai
        authSource: "schooldb"
    }
    try {
        await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        console.log("Server connected to DB...");
    } catch (err) {
        console.log(err);
    }
}

export default connectDB