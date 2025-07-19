import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import { validatePassword } from './auth.helpers'
import { transporter } from './auth.helpers'

const prisma = new PrismaClient()

const SECRET = process.env.JWT_SECRET!

interface RegisterParams {
    nomeCompleto: string
    numeroEstudante: string
    fullemail?: string
    senha: string
    contacto: string
}

export const register = async ({ nomeCompleto, numeroEstudante, senha, contacto }: RegisterParams) => {
  if (!nomeCompleto || !numeroEstudante || !senha || !contacto) throw new Error('Campos obrigatórios ausentes.')
  if (!validatePassword(senha)) throw new Error('Senha muito fraca.')
  const existing = await prisma.user.findUnique({ where: { numeroEstudante } })
  if (existing) throw new Error('Estudade já cadastrado.')

  const hashed = await bcrypt.hash(senha, 10)
  const user = await prisma.user.create({ data: { nomeCompleto, numeroEstudante, fullemail: `${numeroEstudante}@isptec.co.ao`, senha: hashed, contacto } })
  return { id: user.id, nomeCompleto: user.nomeCompleto, numeroEstudante: user.numeroEstudante ,fullemail: `${user.numeroEstudante}@isptec.co.ao`, contacto: user.contacto }
}

export const login = async ({ numeroEstudante, senha }: { numeroEstudante: string; senha: string }) => {
  if (!numeroEstudante || !senha) throw new Error('Número de estudante e senha obrigatórios.')

  const user = await prisma.user.findUnique({ where: { numeroEstudante } })
  if (!user) throw new Error('Estudante não encontrado.')

  const match = await bcrypt.compare(senha, user.senha)
  if (!match) throw new Error('Credenciais inválidas.')

  return jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' })
}

export const recoverPassword = async (numeroEstudante: string) => {
  const user = await prisma.user.findUnique({ where: { numeroEstudante } })
  console.log(`Recovering password for user: ${numeroEstudante}`)
  if (!user) throw new Error('Usuário não encontrado.')

  const emailDestino = `${numeroEstudante}@isptec.co.ao`

  await transporter.sendMail({
    from: `"Sistema ISPTEC" <${process.env.EMAIL_USER}>`,
    to: emailDestino,
    subject: 'Recuperação de Senha',
    html: `
      <p>Olá ${user.nomeCompleto},</p>
      <p>Recebemos um pedido de recuperação de senha para o seu número de estudante: <strong>${numeroEstudante}</strong>.</p>
      <p><a href="https://teusite.com/resetar-senha/${numeroEstudante}">Clique aqui para redefinir sua senha</a></p>
      <p>Se não foi você, ignore este email.</p>
      <p>ATT: esse link ainda não funciona, acho que vou mudar de lógica para isso.</p>
    `
  })

  console.log(`[✔] Email de recuperação enviado para ${emailDestino}`)
}

export const getUsers = async () => {
  console.log("Fetching all users from the database.")
  const users = await prisma.user.findMany()
  console.log(users)
  return users.map(user => ({
    id: user.id,
    nomeCompleto: user.nomeCompleto,
    numeroEstudante: user.numeroEstudante,
    fullemail: user.fullemail,
    contacto: user.contacto
  }))
}

export const deleteUser = async (userId: number) => {
  console.log(`Deleting user with ID: ${userId}`)
  await prisma.user.delete({ where: { id: userId } })

}
