import { Request, Response, NextFunction } from "express";

// Validação para criar estudante
export const validateEstudanteData = (req: Request, res: Response, next: NextFunction) => {
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

export const validateExternoData = (req: Request, res: Response, next: NextFunction) => {
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

// Validação para atualizar status
export const validateStatusUpdate = (req: Request, res: Response, next: NextFunction) => {
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

// Validação de ID numérico
export const validateIdParam = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: "ID deve ser um número válido" });
  }
  
  next();
};

// Validação de número de estudante
export const validateNumeroEstudante = (req: Request, res: Response, next: NextFunction) => {
  const { numeroEstudante } = req.params;
  
  if (!numeroEstudante || numeroEstudante.trim() === '') {
    return res.status(400).json({ error: "Número de estudante é obrigatório" });
  }
  
  next();
};

// Validação de email no parâmetro
export const validateEmailParam = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.params;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: "Email válido é obrigatório" });
  }
  
  next();
};

// Middleware básico para rotas de admin
export const authenticateAdmin = (req: Request, res: Response, next: NextFunction) => {
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

// ---------------------- MIDDLEWARE DE LOGGING ----------------------

// Log de requisições
export const logRequests = (req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const ip = req.ip || req.connection.remoteAddress;
  
  console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`);
  
  next();
};

// Log específico para operações de estudante
export const logEstudanteOperation = (req: Request, res: Response, next: NextFunction) => {
  const operation = req.method;
  const { numeroEstudante } = req.params;
  const { id } = req.params;
  
  console.log(`Operação ${operation} - Estudante: ${numeroEstudante || 'N/A'} - ID: ${id || 'N/A'}`);
  
  next();
};

// Log específico para operações de externo
export const logExternoOperation = (req: Request, res: Response, next: NextFunction) => {
  const operation = req.method;
  const { email } = req.params;
  const { id } = req.params;
  
  console.log(`Operação ${operation} - Email: ${email || 'N/A'} - ID: ${id || 'N/A'}`);
  
  next();
};

// ---------------------- MIDDLEWARE DE TRATAMENTO DE ERROS ----------------------

// Middleware para capturar erros não tratados
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
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

// ---------------------- MIDDLEWARE DE SANITIZAÇÃO ----------------------

// Sanitizar dados de entrada
export const sanitizeData = (req: Request, res: Response, next: NextFunction) => {
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

