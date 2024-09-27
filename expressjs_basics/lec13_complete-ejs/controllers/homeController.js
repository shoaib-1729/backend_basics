const homeController = (req, res) => {
    const data = {
        "title": "Home",
        "name": "Sonam",
        "count": 0,
        "marks": [10, 20, 30, 40, 50]
    }
    res.render("index", data)
}

export { homeController }