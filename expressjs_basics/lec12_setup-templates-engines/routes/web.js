import express from "express";
import { homeController } from "../controllers/homeController.js";
import { aboutController } from "../controllers/aboutController.js";

// router
const router = express.Router();

// home route
router.get("/", homeController);

// about route
router.get("/about", aboutController);

export default router;