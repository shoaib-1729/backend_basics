import mongoose from "mongoose"

// student schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 60
    },
    fees: {
        type: mongoose.Decimal128,
        required: true,
        value: (value) => value >= 5000.50
    }
})

// model
const StudentModel = mongoose.model("student", studentSchema)


// export model
export default StudentModel