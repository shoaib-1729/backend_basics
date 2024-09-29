const serviceController = (req, res) => {
    const data = {
        "title": "About"
    }
    res.render("service", data)
}

export { serviceController }