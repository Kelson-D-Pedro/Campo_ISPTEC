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
  const { numeroEstudante } = req.body

  if (!numeroEstudante) {
    return res.status(400).json({ error: 'Número de estudante é obrigatório.' })
  }

  try {
    await AuthService.recoverPassword(numeroEstudante)
    console.log("Password recovery instructions sent to:", numeroEstudante)
    res.status(200).json({ message: 'Instruções enviadas para o e-mail institucional.' })
  } catch (error) {
    console.error("Error recovering password:", error)
    res.status(400).json({ error: "Erro ao recuperar senha." })
  }
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    console.log("Fetching all registered users.")
    const users = await AuthService.getUsers()
    console.log("Users retrieved successfully.")
    res.status(200).json(users)
  } catch (error) {
    console.error("Error retrieving users:", error)
    res.status(500).json({ error: "Erro ao obter usuários." })
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userID = req.params.id
    if (!userID) {
        console.error("User not authenticated for deletion.")
      return res.status(401).json({ error: "Usuário não autenticado" })
    }
    const userId = Number(userID)
    if (isNaN(userId)) {
        console.error("Invalid user ID for deletion:", userID)
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
