import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import { validateEmail, validatePassword } from './auth.helpers'

const prisma = new PrismaClient()

const SECRET = process.env.JWT_SECRET!

interface RegisterParams {
  nome: string
  email: string
  senha: string
  tipo: string
}

export const register = async ({ nome, email, senha, tipo }: RegisterParams) => {
  if (!nome || !email || !senha || !tipo) throw new Error('Campos obrigatórios ausentes.')
  if (!validateEmail(email)) throw new Error('Email inválido.')
  if (!validatePassword(senha)) throw new Error('Senha muito fraca.')

  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) throw new Error('Email já cadastrado.')

  const hashed = await bcrypt.hash(senha, 10)
  const user = await prisma.user.create({ data: { nome, email, senha: hashed, tipo } })
  return { id: user.id, nome: user.nome, email: user.email, tipo: user.tipo }
}

export const login = async ({ email, senha }: { email: string; senha: string }) => {
  if (!email || !senha) throw new Error('Email e senha obrigatórios.')

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) throw new Error('Usuário não encontrado.')

  const match = await bcrypt.compare(senha, user.senha)
  if (!match) throw new Error('Credenciais inválidas.')

  return jwt.sign({ id: user.id, tipo: user.tipo }, SECRET, { expiresIn: '1h' })
}

export const recoverPassword = async (email: string) => {
  if (!validateEmail(email)) throw new Error('Email inválido.')
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) throw new Error('Usuário não encontrado.')

  // Simula envio de email
  console.log(`[RECUPERAR SENHA] Enviar link para: ${email}`)
}

export const updateUser = async (userId: number, data: any) => {
  const fields: Record<string, any> = {}
  if (data.nome) fields['nome'] = data.nome
  if (data.email && validateEmail(data.email)) fields['email'] = data.email
  if (data.senha && validatePassword(data.senha)) {
    fields['senha'] = await bcrypt.hash(data.senha, 10)
  }

  return prisma.user.update({
    where: { id: userId },
    data: fields
  })
}

export const deleteUser = async (userId: number) => {
  await prisma.user.delete({ where: { id: userId } })
}
