import express from 'express'
import {getStudentSubjects, updateStudentSubjects} from '../controllers/subject.controller'

const router = express.Router()

router.get('/:id', getStudentSubjects)
router.put('/:id', updateStudentSubjects)


export default router