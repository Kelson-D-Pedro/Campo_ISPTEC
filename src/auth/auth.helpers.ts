import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  service: 'gmail', // ou smtp isptec, outlook etc
  auth: {
    user: process.env.EMAIL_USER,      // exemplo: isptrecuperacao@gmail.com
    pass: process.env.EMAIL_PASS       // senha do app ou smtp
  }
})
export const validatePassword = (senha: string): boolean => {
  return senha.length >= 6 && /[A-Z]/.test(senha) && /\d/.test(senha)
}
