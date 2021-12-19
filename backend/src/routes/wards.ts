import express from 'express'
import { updateParentWard, getWards, getAsingle} from '../controllers/wards.controller'


const router = express.Router()

router.put('/:id', updateParentWard)
router.get('/', getWards)
router.get('/:id', getAsingle)

export default router