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
// creating the collection using the schema using model (model provides an instance of the collection)
// model method ek constructor return karega, isiliye spelling capital rakho, aur new keyword lagao jab bhi use karo iske return value ko 
const StudentModel = mongoose.model("Student", studentSchema)

//  create a function to insert a document
const createDoc = async(nm, ag, fee, hobby, isAct, comm) => {
    try {
        // create the document using the model or collection instance
        const studentDoc = new StudentModel({
                name: nm,
                age: ag,
                fees: fee,
                hobbies: hobby,
                isActive: isAct,
                comments: comm
            })
            // save the document
            // save method ek promise return karega, isiliye promise handling karo
        const result = await studentDoc.save()
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

export default createDoc