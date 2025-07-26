"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUsers = exports.updateUser = exports.getUser = exports.recoverPassword = exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const auth_helpers_1 = require("./auth.helpers");
const prisma = new client_1.PrismaClient();
const SECRET = process.env.JWT_SECRET;
const register = async ({ nomeCompleto, numeroEstudante, senha }) => {
    if (!nomeCompleto)
        console.error('Nome completo é obrigatório.');
    if (!numeroEstudante)
        console.error('Número de estudante é obrigatório.');
    if (!senha)
        console.error('Senha é obrigatória.');
    if (!nomeCompleto || !numeroEstudante || !senha)
        throw new Error('Campos obrigatórios ausentes.');
    if (!(0, auth_helpers_1.validatePassword)(senha))
        throw new Error('Senha muito fraca.');
    const existing = await prisma.user.findUnique({ where: { numeroEstudante } });
    if (existing)
        throw new Error('Estudade já cadastrado.');
    const hashed = await bcrypt_1.default.hash(senha, 10);
    const user = await prisma.user.create({ data: { nomeCompleto, numeroEstudante, fullemail: `${numeroEstudante}@isptec.co.ao`, senha: hashed, contacto: '' } });
    return { id: user.id, nomeCompleto: user.nomeCompleto, numeroEstudante: user.numeroEstudante, fullemail: `${user.numeroEstudante}@isptec.co.ao` };
};
exports.register = register;
const login = async ({ numeroEstudante, senha }) => {
    if (!numeroEstudante || !senha)
        throw new Error('Número de estudante e senha obrigatórios.');
    const user = await prisma.user.findUnique({ where: { numeroEstudante } });
    console.log('Usuário encontrado:', user);
    if (!user)
        throw new Error('Estudante não encontrado.');
    const match = await bcrypt_1.default.compare(senha, user.senha);
    if (!match)
        throw new Error('Credenciais inválidas.');
    const token = jsonwebtoken_1.default.sign({ id: user.id }, SECRET, { expiresIn: '1h' });
    return token;
};
exports.login = login;
const recoverPassword = async (numeroEstudante) => {
    const user = await prisma.user.findUnique({ where: { numeroEstudante } });
    console.log(`Recovering password for user: ${numeroEstudante}`);
    if (!user)
        throw new Error('Usuário não encontrado.');
    const emailDestino = `${numeroEstudante}@isptec.co.ao`;
    const otp = (0, auth_helpers_1.generateOtp)();
    console.log(`OTP gerado: ${otp}`);
    await auth_helpers_1.transporter.sendMail({
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
    console.log(`[✔] Email de recuperação enviado para ${emailDestino}`);
    return otp;
};
exports.recoverPassword = recoverPassword;
const getUser = async (userId) => {
    console.log(`Fetching user with ID: ${userId}`);
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user)
        throw new Error('Usuário não encontrado.');
    return {
        id: user.id,
        nomeCompleto: user.nomeCompleto,
        numeroEstudante: user.numeroEstudante,
        fullemail: user.fullemail,
        contacto: user.contacto
    };
};
exports.getUser = getUser;
const updateUser = async (userId, data) => {
    console.log(`Updating user with ID: ${userId}`);
    const user = await prisma.user.update({
        where: { id: userId },
        data: {
            nomeCompleto: data.nomeCompleto,
            numeroEstudante: data.numeroEstudante,
            fullemail: data.fullemail,
            contacto: data.contacto
        }
    });
    return {
        id: user.id,
        nomeCompleto: user.nomeCompleto,
        numeroEstudante: user.numeroEstudante,
        fullemail: user.fullemail,
        contacto: user.contacto
    };
};
exports.updateUser = updateUser;
const getUsers = async () => {
    console.log("Fetching all users from the database.");
    const users = await prisma.user.findMany();
    console.log(users);
    return users.map(user => ({
        id: user.id,
        nomeCompleto: user.nomeCompleto,
        numeroEstudante: user.numeroEstudante,
        fullemail: user.fullemail,
        contacto: user.contacto
    }));
};
exports.getUsers = getUsers;
const deleteUser = async (userId) => {
    console.log(`Deleting user with ID: ${userId}`);
    await prisma.user.delete({ where: { id: userId } });
};
exports.deleteUser = deleteUser;
