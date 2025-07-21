import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import { validatePassword , transporter, generateOtp } from './auth.helpers'
import { send } from 'process'


const prisma = new PrismaClient()

const SECRET = process.env.JWT_SECRET!

interface RegisterParams {
    nomeCompleto: string
    numeroEstudante: string
    fullemail?: string
    senha: string
    contacto?: string
}

export const register = async ({ nomeCompleto, numeroEstudante, senha}: RegisterParams) => {
  if (!nomeCompleto)
    console.error('Nome completo é obrigatório.')
  if (!numeroEstudante)
    console.error('Número de estudante é obrigatório.')
  if (!senha)
    console.error('Senha é obrigatória.')
  if (!nomeCompleto || !numeroEstudante || !senha) throw new Error('Campos obrigatórios ausentes.')
  if (!validatePassword(senha)) throw new Error('Senha muito fraca.')
  const existing = await prisma.user.findUnique({ where: { numeroEstudante } })
  if (existing) throw new Error('Estudade já cadastrado.')

  const hashed = await bcrypt.hash(senha, 10)
  const user = await prisma.user.create({ data: { nomeCompleto, numeroEstudante, fullemail: `${numeroEstudante}@isptec.co.ao`, senha: hashed, contacto: '' } })
  return { id: user.id, nomeCompleto: user.nomeCompleto, numeroEstudante: user.numeroEstudante ,fullemail: `${user.numeroEstudante}@isptec.co.ao` }
}

export const login = async ({ numeroEstudante, senha }: {numeroEstudante: string, senha: string }) => {
  if (!numeroEstudante || !senha) throw new Error('Número de estudante e senha obrigatórios.');

  const user = await prisma.user.findUnique({ where: { numeroEstudante } });
  console.log('Usuário encontrado:', user);
  if (!user) throw new Error('Estudante não encontrado.');

  const match = await bcrypt.compare(senha, user.senha);
  if (!match) throw new Error('Credenciais inválidas.');

  const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' });
  return token;
};

export const recoverPassword = async (numeroEstudante: string) => {
  const user = await prisma.user.findUnique({ where: { numeroEstudante } })
  console.log(`Recovering password for user: ${numeroEstudante}`)
  if (!user) throw new Error('Usuário não encontrado.')

  const emailDestino = `${numeroEstudante}@isptec.co.ao`
  const otp = generateOtp()
  console.log(`OTP gerado: ${otp}`)

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: emailDestino,
    subject: 'Recuperação de Senha ISPTEC',
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #f0ad4e;">Recuperação de Senha ISPTEC</h2>
        <p>Olá,</p>
        <p>Você solicitou a recuperação de senha para o número de estudante <strong>${numeroEstudante}</strong>.</p>
        <p>Seu código de verificação é: <strong style="color: #f0ad4e;">${otp}</strong></p>
        <p>Por favor, use este código para redefinir sua senha.</p>
        <p>Se você não solicitou esta recuperação, ignore este e-mail.</p>
        <p>Atenciosamente,<br>Equipe ISPTEC</p>
      </div>
    `
  });
  console.log(`[✔] Email de recuperação enviado para ${emailDestino}`)
  return otp;
}

export const getUser = async (userId: number) => {
  console.log(`Fetching user with ID: ${userId}`)
  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) throw new Error('Usuário não encontrado.')
  return {
    id: user.id,
    nomeCompleto: user.nomeCompleto,
    numeroEstudante: user.numeroEstudante,
    fullemail: user.fullemail,
    contacto: user.contacto
  }
}
export const updateUser = async (userId: number, data: Partial<RegisterParams>) => {
  console.log(`Updating user with ID: ${userId}`)
  const user = await prisma.user.update({
    where: { id: userId },
    data: {
      nomeCompleto: data.nomeCompleto,
      numeroEstudante: data.numeroEstudante,
      fullemail: data.fullemail,
      contacto: data.contacto
    }
  })
  return {
    id: user.id,
    nomeCompleto: user.nomeCompleto,
    numeroEstudante: user.numeroEstudante,
    fullemail: user.fullemail,
    contacto: user.contacto
  }
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
