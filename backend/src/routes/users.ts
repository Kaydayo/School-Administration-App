import {register, login, updateUserAuth} from  '../controllers/auth.controller'
import express from 'express'

var router = express.Router();

/* GET users listing. */
router.post('/register', register)
router.post('/login', login)
router.post('/:id', updateUserAuth)

export default router;
