const homeController = (req, res) => {
    // const name = "This variable is injected in HTML using EJS template Engine"
    // render method view files ko 'html' mei convert karega, variables wagerah insert karega, phir client ko server karega
    // using defined local variable
    // res.render("index", name)
    res.render("index", { name: "This variable is injected in HTML using EJS template Engine" });
};

export { homeController };