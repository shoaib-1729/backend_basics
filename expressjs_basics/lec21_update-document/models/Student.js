import mongoose from "mongoose";

// creating schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 50
    },
    fees: {
        type: mongoose.Decimal128,
        required: true,
        validate: v => v > 5500.50
    },
    hobbies: {
        type: Array
    },
    isActive: {
        type: Boolean
    },
    comments: {
        type: [{
            value: {
                type: String
            },
            publish: {
                type: Date,
                default: Date.now
            }
        }]
    },
    join: {
        type: Date,
        default: Date.now
    }
})

// compiling the schema 
const StudentModel = mongoose.model("Student", studentSchema)
