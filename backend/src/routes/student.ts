import express from 'express'
import {getAllStudents, getSingleStudent, updateStudent, deleteStudent} from '../controllers/student.controller'

const router = express.Router();

router.get('/students', getAllStudents)
router.put('/students/:id', updateStudent)
router.get('/students/:id', getSingleStudent)
router.delete('/students/:id', deleteStudent)

export default router