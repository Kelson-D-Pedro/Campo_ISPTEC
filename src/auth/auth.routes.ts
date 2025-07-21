import { Router } from 'express'
import * as AuthController from './auth.controller'
import { verifyToken, checkRole } from './auth.middleware'

const router = Router()

router.post('/api/register', AuthController.register)
router.post('/api/login', AuthController.login)
router.post('/api/recover', AuthController.recoverPassword)
router.get('/api/admin/getUsers', AuthController.getUsers)
router.get('/api/admin/getUser/:id', verifyToken, AuthController.getUser)
router.put('/api/admin/update/:id', verifyToken, AuthController.updateUser)
router.delete('/api/delete/:id', verifyToken, AuthController.deleteUser)

export default router
