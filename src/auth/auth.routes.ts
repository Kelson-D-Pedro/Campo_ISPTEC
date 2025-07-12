import { Router } from 'express'
import * as AuthController from './auth.controller'
import { verifyToken, checkRole } from './auth.middleware'

const router = Router()

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/recover', AuthController.recoverPassword)

router.put('/update', verifyToken, AuthController.updateUser)
router.delete('/delete', verifyToken, AuthController.deleteUser)

export default router
