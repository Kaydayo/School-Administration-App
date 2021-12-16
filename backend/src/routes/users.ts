import {register, login} from  '../controllers/auth.controller'
import express from 'express'

var router = express.Router();

/* GET users listing. */
router.post('/register', register)
router.post('/login', login)

export default router;
