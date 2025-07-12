import { Request, Response } from 'express'
import * as AuthService from './auth.service'

declare global {
  namespace Express {
    interface Request {
      user?: { id: string }
    }
  }
}

export const register = async (req: Request, res: Response) => {
  try {
    const user = await AuthService.register(req.body)
    res.status(201).json(user)
    console.log("User registered successfully:", user)
  } catch (error) {
    console.error("Error registering user:", error)
    res.status(400).json({ error: "Erro ao registrar usuário." })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const token = await AuthService.login(req.body)
    console.log("User logged in successfully, token generated.")
    res.status(200).json({ token })
  } catch (error) {
    console.error("Error logging in user:", error)
    res.status(401).json({ error: "Credenciais inválidas." })
  }
}

export const recoverPassword = async (req: Request, res: Response) => {
  try {
    await AuthService.recoverPassword(req.body.email)
    console.log("Password recovery instructions sent to email:", req.body.email)
    res.status(200).json({ message: 'Instruções enviadas para o e-mail.' })
  } catch (error) {
    console.error("Error recovering password:", error)
    res.status(400).json({ error: "Erro ao recuperar senha." })
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    if (!req.user || !req.user.id) {
        console.error("User not authenticated for update.")
      return res.status(401).json({ error: "Usuário não autenticado" })
    }
    const userId = Number(req.user.id)
    if (isNaN(userId)) {
        console.error("Invalid user ID for update:", req.user.id)
      return res.status(400).json({ error: "ID de usuário inválido" })
    }
    const updated = await AuthService.updateUser(userId, req.body)
    console.log("User updated successfully:", updated)
    res.status(200).json(updated)
  } catch (err) {
    console.error("Error updating user:", err)
    res.status(400).json({ error: "Erro ao atualizar senha." })
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    if (!req.user || !req.user.id) {
        console.error("User not authenticated for deletion.")
      return res.status(401).json({ error: "Usuário não autenticado" })
    }
    const userId = Number(req.user.id)
    if (isNaN(userId)) {
        console.error("Invalid user ID for deletion:", req.user.id)
      return res.status(400).json({ error: "ID de usuário inválido" })
    }
    await AuthService.deleteUser(userId)
    console.log("User deleted successfully with ID:", userId)
    res.status(204).end()
  } catch (err) {
    console.error("Error deleting user:", err)
    res.status(400).json({ error: "Erro ao apagar usuário." })
  }
}
