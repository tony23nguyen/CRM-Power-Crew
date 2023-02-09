import express from 'express'
import controller from '../controllers/Auth'

const router = express.Router()


router.post('/addUser', controller.createUser);

export default router;