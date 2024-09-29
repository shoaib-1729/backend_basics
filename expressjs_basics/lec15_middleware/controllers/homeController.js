const homeController = (req, res) => {
    const data = {
        title: "Home"
    }
    res.render("index", data)
}

export { homeController }