import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET!

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).json({ error: 'Token ausente' })

  const token = authHeader.split(' ')[1]
  try {
    const decoded = jwt.verify(token, SECRET)
    if (typeof decoded === 'object' && decoded !== null && 'id' in decoded) {
      req.user = decoded as { id: string }
      next()
    } else {
        console.error("Decoded token does not contain user ID:", decoded)
      return res.status(401).json({ error: 'Token inválido ou expirado' })
    }
  } catch (err) {
    console.error("Token verification error:", err)
    res.status(401).json({ error: 'Token inválido ou expirado' })
  }
}

export const checkRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes((req.user as any).tipo)) {
      return res.status(403).json({ error: 'Permissão negada' })
    }
    next()
  }
}
