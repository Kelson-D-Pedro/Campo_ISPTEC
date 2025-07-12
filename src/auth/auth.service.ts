import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import { validatePassword } from './auth.helpers'

const prisma = new PrismaClient()

const SECRET = process.env.JWT_SECRET!

interface RegisterParams {
    nome: string
    numeroEstudante: string
    senha: string
    contacto: string
}

export const register = async ({ nome, numeroEstudante, senha, contacto }: RegisterParams) => {
  if (!nome || !numeroEstudante || !senha || !contacto) throw new Error('Campos obrigatórios ausentes.')
  //if (!validatePassword(senha)) throw new Error('Senha muito fraca.')
  const existing = await prisma.user.findUnique({ where: { numeroEstudante } })
  if (existing) throw new Error('Estudade já cadastrado.')

  const hashed = await bcrypt.hash(senha, 10)
  const user = await prisma.user.create({ data: { nome, numeroEstudante, senha: hashed, contacto } })
  return { id: user.id, nome: user.nome, numeroEstudante: `${user.numeroEstudante}@gmial.co.ao`, contacto: user.contacto }
}

export const login = async ({ numeroEstudante, senha }: { numeroEstudante: string; senha: string }) => {
  if (!numeroEstudante || !senha) throw new Error('Email e senha obrigatórios.')

  const user = await prisma.user.findUnique({ where: { numeroEstudante } })
  if (!user) throw new Error('Estudante não encontrado.')

  const match = await bcrypt.compare(senha, user.senha)
  if (!match) throw new Error('Credenciais inválidas.')

  return jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' })
}

export const recoverPassword = async (numeroEstudante: string) => {
  const user = await prisma.user.findUnique({ where: { numeroEstudante } })
  if (!user) throw new Error('Usuário não encontrado.')

  // Simula envio de email
  console.log(`[RECUPERAR SENHA] Enviar link para: ${numeroEstudante}@isptec.co.co`)
}

export const deleteUser = async (userId: number) => {
  await prisma.user.delete({ where: { id: userId } })
}
