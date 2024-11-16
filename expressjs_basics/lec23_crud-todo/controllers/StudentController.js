import StudentModel from "../models/StudentModel.js"
class StudentController {
    // creating document
    static createDoc = async(req, res) => {
        // pehle form se data nikalege phir database phir database mei save karege document banakar
        // form se data nikalne ke liye req.body ka use karege with urlencoded middleware (refer docs)
        try {
            // console.log("Post Data")
            // console.log(req.body)
            // destructuring request body
            // yeh saare fields form wala data hai joh user fill karega
            const { name, age, fees } = req.body;
            // creating the document using model
            const doc = new StudentModel({
                    // jab key value pair same ho toh direct use kar sakte hai jaise agar {name:name, age:age, fees:fees} ho toh direct {name, age, fees} likh sakte hai
                    // left wala database ke fields hai, aur right wala joh humne form se nikaala hai woh hai req.body ka use karke
                    name: name,
                    age: age,
                    fees: fees
                })
                // saving the document inside DB
            const result = await doc.save()
            console.log(result)

        } catch (err) {
            console.log(err)
        }
        // redirect to the same page after creating the document
        res.redirect("/student")
    }

    // reading document
    static getAllDoc = async(req, res) => {
        try {
            // find all documents from database
            const result = await StudentModel.find()
                // console.log(result)
                // render it in index page
            res.render("index", { data: result });

        } catch (err) {
            console.log(err)
        }
    }

    // edit button pe click hone par yeh chalega
    static editDoc = async(req, res) => {
        // jab edit button par click karege tab url mei edit/:id append kar dege, phir usi id ke document ka data fetch karke edit form mei pre-populate karwa dege
        // fetch the query strings parameters from the url
        try {
            // console.log(req.params);
            // document nikaal lo id ke zariye
            const result = await StudentModel.findById(req.params.id);
            // console.log(result);
            res.render("edit", { data: result });
        } catch (error) {
            console.log(error);

        }
    }

    // updating document
    // edit page par update button ke click hone yeh chalega
    static updateDocById = async(req, res) => {
        // update button pr click karne par /update/id append kardo url par jisse ki url 
        // redirect to the same page after updating the document
        // console.log(req.params)
        // console.log(req.body)
        try {
            // id se document find karo, aur phir usko req.body object se update kardo
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            console.log(result)
            res.redirect("/student")
        } catch (error) {
            console.log(error)
        }
    }

    // deleting document
    // delete button ke click hone par yeh chalega
    static deleteDocById = async(req, res) => {
        // redirect to the same page after deleting the document
        // same waisa hi logic rahega jaise edit ke case mei kiya tha
        // console.log(req.params.id)
        try {
            // id ke basis pr document find karo document ko db mei se
            const result = await StudentModel.findByIdAndDelete(req.params.id)
                // console.log(result)
                // student page par wapas redirect karwa do
            res.redirect("/student")
        } catch (error) {
            console.log(error);
        }
    }
}

export default StudentController;