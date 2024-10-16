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

// update the document

// update using Id
const updateDocById = async(id) => {
    try {
        // matches tho document with the specified id, and update the field mentioned
        const result = await StudentModel.findByIdAndUpdate(id, { name: "Suneeta" })
            // get updated document
            // const result = await StudentModel.findByIdAndUpdate(id, { name: "Suneeta" }, { returnDocument: "after" })

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// update one document using filter
const updateOneDoc = async(age) => {
    try {
        // pehla match document find karega using filter, then usko required field se update kar dega, yeh humesha ek hi document update karega
        // filter humesha object mei provide karo
        // id hai toh uske case mei ek hi document match hoga, baaki fields se bhi filter kar sakte hai
        const result = await StudentModel.updateOne({ _id: id }, { name: "Sonio" })

        //upsert property: agar filter se koi document match nahi hota, uss case mein 'upsert' ki value true set karne par ek naya document insert ho jaayega un provoded fields ko leke, yeh by default false rehta hai, insert karte samay koi vaidation check nahin hogi iss case mei
        // const result = await StudentModel.updateOne({ _id: id }, { name: "Pikachu" }, { upsert: true })

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// update many document using filter
const updateManyDoc = async(age) => {
    try {
        // ismei bhi upsert property ka use kar sakte hai
        // sabko match karega using filter, joh joh documents match hoge sabko update kar dega
        const result = await StudentModel.updateMany({ age: age }, { name: "Ramanujan" })

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export { updateDocById, updateOneDoc, updateManyDoc }