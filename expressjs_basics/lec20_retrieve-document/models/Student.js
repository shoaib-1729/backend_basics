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

// get all documents
const getAllDocs = async() => {
    try {
        const result = await StudentModel.find()
            // console.log(result);
            // fetch each field in the document using forEach
        result.forEach((item) => {
            console.log(
                item.name,
                item.age,
                // convert decimal to string
                item.fees.toString(),
                item.isActive,
                item.join.toLocaleString(),
                item.hobbies[0],
                item.hobbies[1]
            )
        })
    } catch (error) {
        console.log(error)

    }
}

// get documents with specific fields
const getDocsSpecificFields = async() => {
    try {
        // include specific fields
        // returns an array of object having the included fields
        const result = await StudentModel.find().select('name age')
            // const result = await StudentModel.find().select(['name', 'age'])
            // const result = await StudentModel.find({}, { name: 1, age: 1 })
            // const result = await StudentModel.find().select({ 'name': 1, 'age': 1 })
        console.log(result);

        // exclude specific fields
        // returns an array of object excluding the given fields
        // const result = await StudentModel.find().select('-name -age')
        // const result = await StudentModel.find().select(['-name', '-age'])
        // const result = await StudentModel.find().select({ 'name': 0, 'age': 0 })
        // const result = await StudentModel.find({}, { name: 0, age: 0 })
        // console.log(result);

    } catch (error) {
        console.log(error)

    }
}

// retrieve document
// retrieve single document (using ID)
const getSingleDoc = async(id) => {
    try {
        const result = await StudentModel.findById(id)
        console.log(result);
        // console.log(result.name);
    } catch (error) {
        console.log(error);
    }
}

// retrieve document by fields (using filter)
const getDocByField = async() => {
    try {
        // returns an array of objects that matches with the given fields
        // const result = await StudentModel.find({ name: "Sonam" })
        // const result = await StudentModel.find({ age: 40 })
        // with specific fields
        const result = await StudentModel.find({ name: "Sonam" }, { name: 1, age: 1 })
        console.log(result);
        // get timestamp using id using getTimeStamp method
        // console.log(result[0]._id.getTimestamp(), result[0].name, result[0].age, result[0].fees.toString());
    } catch (error) {
        console.log(error);
    }
}

// skip the doc
const skipDoc = async() => {
    try {
        // const result = await StudentModel.find().skip(1)
        const result = await StudentModel.find({}, null, { skip: 1 })
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// limit the doc count
const limitDoc = async() => {
    try {
        // const result = await StudentModel.find().limit(2)
        const result = await StudentModel.find({}, null, { limit: 2 })
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// get doc count
const getDocCount = async() => {
    try {
        const result = await StudentModel.find().countDocuments()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// mixed queries
const getDocByMixedQuery = async() => {
    try {
        const result = await StudentModel.find({ age: 40 }, { name: 1, age: 1 }, { skip: 1 })
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// query with comparison operator
const getDocByComparisonQuery = async() => {
    try {
        // greater than
        // const result = await StudentModel.find({ age: { $gt: 25 } });
        // greater than or equal to
        // const result = await StudentModel.find({ age: { $gte: 25 } });
        // less than
        // const result = await StudentModel.find({ age: { $lt: 35 } });
        // less than or equal to
        const result = await StudentModel.find({ age: { $lte: 35 } });

        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

// query with logical operator
const getDocByLogicalQuery = async() => {
    try {
        // logical and operator
        // const result = await StudentModel.find({ $and: [{ name: "Kabir" }, { age: 40 }] });
        // logical or operator
        // const result = await StudentModel.find({ $or: [{ name: "Kabir" }, { age: 40 }] });
        // logical not
        const result = await StudentModel.find({ $nor: [{ age: { $gt: 35 } }] });

        console.log(result);
    } catch (error) {
        console.log(error);
    }
};


export { getAllDocs, getDocsSpecificFields, getSingleDoc, getDocByField, skipDoc, limitDoc, getDocCount, getDocByMixedQuery, getDocByComparisonQuery, getDocByLogicalQuery }