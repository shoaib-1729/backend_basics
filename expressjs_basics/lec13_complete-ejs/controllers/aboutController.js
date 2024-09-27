const aboutController = (req, res) => {
    const data = {
        "title": "About",
    }
    res.render("about", data)
}

export { aboutController }