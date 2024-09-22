import express from "express"
import { homeController } from "../controllers/homeController.js"
import { aboutController } from "../controllers/aboutController.js"

const router = express.Router()

// home controller
router.get("/", homeController)
    // about controller
router.get("/about", aboutController)


// export router
export default router