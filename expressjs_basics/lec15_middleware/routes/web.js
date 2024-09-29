import express from "express"
import { homeController } from "../controllers/homeController.js"
import { aboutController } from "../controllers/aboutController.js"


// router
const router = express.Router();

// routes
router.get("/", homeController)
router.get("/about", aboutController)

// export router
export default router