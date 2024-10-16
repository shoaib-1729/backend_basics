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

// delete document by id
const deleteDocByID = async(id) => {
        try {
            // delete document by id, id match karega, phir matched document ko delete karega,ek hi document delete hoga
            const result = await StudentModel.findByIdAndDelete(id)
            console.log(result);
        } catch (error) {
            console.log(error);

        }
    }
    // delete a document by filter
const deleteOneDocByFilter = async(age) => {
        try {
            // delete document by filter, filter match hoga phir matched document delete hoga,ek hi document delete hoga joh sabse pehle match hua
            const result = await StudentModel.deleteOne({ _id: id })
                // delete using age as filter, take 'age' as parameter
                // const result = await StudentModel.deleteOne({ age: age })
            console.log(result);
        } catch (error) {
            console.log(error);

        }
    }
    // delete multiple documents using filter
const deleteManyDoc = async(age) => {
    try {
        // joh bhi filter se match hoga document,sabko delete kar dega
        const result = await StudentModel.deleteMany({ age: age })
        console.log(result);
    } catch (error) {
        console.log(error);

    }
}

export { deleteDocByID, deleteOneDocByFilter, deleteManyDoc }