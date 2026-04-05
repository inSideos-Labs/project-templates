import jwt from 'jsonwebtoken';
export function verifyToken(req: any, res: any, next: any) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try { req.user = jwt.verify(token, process.env.JWT_SECRET!); next(); }
  catch { res.status(403).json({ error: 'Invalid token' }); }
}