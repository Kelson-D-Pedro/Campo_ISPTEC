"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUsers = exports.recoverPassword = exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const auth_helpers_1 = require("./auth.helpers");
const auth_helpers_2 = require("./auth.helpers");
const prisma = new client_1.PrismaClient();
const SECRET = process.env.JWT_SECRET;
const register = async ({ nomeCompleto, numeroEstudante, senha, contacto }) => {
    if (!nomeCompleto || !numeroEstudante || !senha || !contacto)
        throw new Error('Campos obrigatórios ausentes.');
    if (!(0, auth_helpers_1.validatePassword)(senha))
        throw new Error('Senha muito fraca.');
    const existing = await prisma.user.findUnique({ where: { numeroEstudante } });
    if (existing)
        throw new Error('Estudade já cadastrado.');
    const hashed = await bcrypt_1.default.hash(senha, 10);
    const user = await prisma.user.create({ data: { nomeCompleto, numeroEstudante, fullemail: `${numeroEstudante}@isptec.co.ao`, senha: hashed, contacto } });
    return { id: user.id, nomeCompleto: user.nomeCompleto, numeroEstudante: user.numeroEstudante, fullemail: `${user.numeroEstudante}@isptec.co.ao`, contacto: user.contacto };
};
exports.register = register;
const login = async ({ numeroEstudante, senha }) => {
    if (!numeroEstudante || !senha)
        throw new Error('Número de estudante e senha obrigatórios.');
    const user = await prisma.user.findUnique({ where: { numeroEstudante } });
    if (!user)
        throw new Error('Estudante não encontrado.');
    const match = await bcrypt_1.default.compare(senha, user.senha);
    if (!match)
        throw new Error('Credenciais inválidas.');
    return jsonwebtoken_1.default.sign({ id: user.id }, SECRET, { expiresIn: '1h' });
};
exports.login = login;
const recoverPassword = async (numeroEstudante) => {
    const user = await prisma.user.findUnique({ where: { numeroEstudante } });
    console.log(`Recovering password for user: ${numeroEstudante}`);
    if (!user)
        throw new Error('Usuário não encontrado.');
    const emailDestino = `${numeroEstudante}@isptec.co.ao`;
    await auth_helpers_2.transporter.sendMail({
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
    });
    console.log(`[✔] Email de recuperação enviado para ${emailDestino}`);
};
exports.recoverPassword = recoverPassword;
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
