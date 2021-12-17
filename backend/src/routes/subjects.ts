import express from 'express'
import {getStudentSubjects, updateStudentSubjects, getAllStudentsSubjects} from '../controllers/subject.controller'

const router = express.Router()

router.get('/:id', getStudentSubjects)
router.put('/:id', updateStudentSubjects)
router.get('/', getAllStudentsSubjects)


export default router