import express from 'express'
import StudentController from '../controllers/StudentControllers.js'

// router
const router = express.Router()

// routes
router.get("/getsessioninfo", StudentController.get_session_info)
router.get("/deletesession", StudentController.delete_session)
router.get("/regnsession", StudentController.regn_session)
router.get("/examplesession", StudentController.session_example)
router.get("/getdata", StudentController.get_session_data)

// export router
export default router