// separate the request handler functions or business logic in controllers

// fetch student
const fetchStudent = (req, res) => {
    res.send("All Students")
}

// delete student
const deleteStudent = (req, res) => {
    console.log("Student Deleted")
        // destructure id from route parameter
    const { id } = req.params
    console.log(id);
    if (id == 10) {
        return res.send(`Can't delete student with id: ${id}`)
    }
    res.send(`Student deleted with id:${id}`)

}

// export functions
export { fetchStudent, deleteStudent }