import express from "express"
import { fetchStudent, deleteStudent } from "../controllers/studentController.js"

// router
const router = express.Router()

// routes
// separate business logic in controllers
router.get("/all", fetchStudent)

router.get("/delete/:id", deleteStudent)

export default router