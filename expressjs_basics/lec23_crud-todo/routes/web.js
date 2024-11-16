import express from "express"
import StudentController from "../controllers/StudentController.js"
const router = express.Router()

// routes
router.get("/", StudentController.getAllDoc)
    // jab form submit hoga toh form ka post method run hoga, action kuch nhi specify kiya hai toh data same par hi bheja jayega
router.post("/", StudentController.createDoc)
router.get("/edit/:id", StudentController.editDoc)
router.post("/update/:id", StudentController.updateDocById)
router.post("/delete/:id", StudentController.deleteDocById)

export default router