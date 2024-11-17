import express from "express"
import StudentController from "../controllers/StudentController.js"

// router
const router = express.Router()

// routes
// route for setting cookies
router.get("/setcookies", StudentController.setCookies)

// route to get cookies
router.get("/getcookies", StudentController.getCookies)

// route to delete cookies
router.get("/deletecookies", StudentController.deleteCookies)

// export router
export default router