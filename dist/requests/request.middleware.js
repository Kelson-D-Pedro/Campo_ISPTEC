"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeData = exports.errorHandler = exports.logExternoOperation = exports.logEstudanteOperation = exports.logRequests = exports.authenticateAdmin = exports.validateEmailParam = exports.validateNumeroEstudante = exports.validateIdParam = exports.validateStatusUpdate = exports.validateExternoData = exports.validateEstudanteData = void 0;
// Validação para criar estudante
const validateEstudanteData = (req, res, next) => {
    const { numeroEstudante, nome, email, curso, data, horario } = req.body;
    if (!numeroEstudante || !nome || !email || !curso || !data || !horario) {
        return res.status(400).json({
            error: "Dados obrigatórios: numeroEstudante, nome, email, curso, data, horario"
        });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Email inválido" });
    }
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(data)) {
        return res.status(400).json({ error: "Data deve estar no formato YYYY-MM-DD" });
    }
    next();
};
exports.validateEstudanteData = validateEstudanteData;
const validateExternoData = (req, res, next) => {
    const { nome, email, empresa, telefone, data, horario } = req.body;
    if (!nome || !email || !empresa || !telefone || !data || !horario) {
        return res.status(400).json({
            error: "Dados obrigatórios: nome, email, empresa, telefone, data, horario"
        });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Email inválido" });
    }
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(data)) {
        return res.status(400).json({ error: "Data deve estar no formato YYYY-MM-DD" });
    }
    next();
};
exports.validateExternoData = validateExternoData;
// Validação para atualizar status
const validateStatusUpdate = (req, res, next) => {
    const { status } = req.body;
    const validStatuses = ['pendente', 'aprovado', 'rejeitado', 'cancelado'];
    if (!status) {
        return res.status(400).json({ error: "Status é obrigatório" });
    }
    if (!validStatuses.includes(status)) {
        return res.status(400).json({
            error: `Status deve ser um dos seguintes: ${validStatuses.join(', ')}`
        });
    }
    next();
};
exports.validateStatusUpdate = validateStatusUpdate;
// Validação de ID numérico
const validateIdParam = (req, res, next) => {
    const { id } = req.params;
    if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: "ID deve ser um número válido" });
    }
    next();
};
exports.validateIdParam = validateIdParam;
// Validação de número de estudante
const validateNumeroEstudante = (req, res, next) => {
    const { numeroEstudante } = req.params;
    if (!numeroEstudante || numeroEstudante.trim() === '') {
        return res.status(400).json({ error: "Número de estudante é obrigatório" });
    }
    next();
};
exports.validateNumeroEstudante = validateNumeroEstudante;
// Validação de email no parâmetro
const validateEmailParam = (req, res, next) => {
    const { email } = req.params;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ error: "Email válido é obrigatório" });
    }
    next();
};
exports.validateEmailParam = validateEmailParam;
// Middleware básico para rotas de admin
const authenticateAdmin = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: "Token de acesso obrigatório" });
    }
    if (!token.startsWith('Bearer ')) {
        return res.status(401).json({ error: "Token deve começar com 'Bearer '" });
    }
    // TODO: Implementar validação JWT real
    next();
};
exports.authenticateAdmin = authenticateAdmin;
// ---------------------- MIDDLEWARE DE LOGGING ----------------------
// Log de requisições
const logRequests = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl;
    const ip = req.ip || req.connection.remoteAddress;
    console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`);
    next();
};
exports.logRequests = logRequests;
// Log específico para operações de estudante
const logEstudanteOperation = (req, res, next) => {
    const operation = req.method;
    const { numeroEstudante } = req.params;
    const { id } = req.params;
    console.log(`Operação ${operation} - Estudante: ${numeroEstudante || 'N/A'} - ID: ${id || 'N/A'}`);
    next();
};
exports.logEstudanteOperation = logEstudanteOperation;
// Log específico para operações de externo
const logExternoOperation = (req, res, next) => {
    const operation = req.method;
    const { email } = req.params;
    const { id } = req.params;
    console.log(`Operação ${operation} - Email: ${email || 'N/A'} - ID: ${id || 'N/A'}`);
    next();
};
exports.logExternoOperation = logExternoOperation;
// ---------------------- MIDDLEWARE DE TRATAMENTO DE ERROS ----------------------
// Middleware para capturar erros não tratados
const errorHandler = (err, req, res, next) => {
    console.error('Erro não tratado:', err.stack);
    // Diferentes tipos de erro podem ser tratados aqui
    if (err.name === 'ValidationError') {
        return res.status(400).json({ error: 'Dados inválidos' });
    }
    if (err.name === 'CastError') {
        return res.status(400).json({ error: 'ID inválido' });
    }
    // Erro genérico
    return res.status(500).json({ error: 'Erro interno do servidor' });
};
exports.errorHandler = errorHandler;
// ---------------------- MIDDLEWARE DE SANITIZAÇÃO ----------------------
// Sanitizar dados de entrada
const sanitizeData = (req, res, next) => {
    if (req.body) {
        // Remover espaços extras e caracteres especiais
        Object.keys(req.body).forEach(key => {
            if (typeof req.body[key] === 'string') {
                req.body[key] = req.body[key].trim();
            }
        });
    }
    next();
};
exports.sanitizeData = sanitizeData;
