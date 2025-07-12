import { Router } from 'express'
import * as AuthController from './auth.controller'
import { verifyToken, checkRole } from './auth.middleware'

const router = Router()

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/recover', AuthController.recoverPassword)
router.delete('/delete/:id', verifyToken, AuthController.deleteUser)

export default router
