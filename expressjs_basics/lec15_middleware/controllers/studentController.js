const studentController = (req, res) => {
    const data = {
        title: "Student"
    }
    res.render("student", data)
}

export { studentController }