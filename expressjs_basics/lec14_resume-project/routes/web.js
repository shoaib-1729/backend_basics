import express from 'express';
import { homeController } from "../controllers/homeController.js";
import { aboutController } from "../controllers/aboutController.js";
import { serviceController } from "../controllers/serviceController.js";
import { contactController } from "../controllers/contactController.js";
import { skillController } from "../controllers/skillController.js";

// router
const router = express.Router()

// routes
router.get("/", homeController)
router.get("/about", aboutController)
router.get("/service", serviceController)
router.get("/skill", skillController)
router.get("/contact", contactController)

// export router
export default router