import express from "express"
import { studentController } from "../controllers/studentController.js";
import { Logger } from "../middlewares/logger-middleware.js";

// router
const router = express.Router();

// router level middleware
// yeh bass router file ke routes par hi execute hoga
// without path
// router.use(Logger)
// with path
router.use("/student", Logger)

// routes
router.get("/student", studentController)

router.get("/student/info", (req, res) => {
    res.send(req.url)
})

router.get("/id", (req, res) => {
    res.send(req.url)
})



// export router
export default router