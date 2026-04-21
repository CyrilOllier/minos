import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const users = new Map<string, { passwordHash: string }>();
export const authRouter = Router();

authRouter.post('/register', async (req, res) => {
  const { email, password } = req.body as { email?: string; password?: string };
  if (!email || !password) return res.status(400).json({ error: 'email et password requis' });
  if (users.has(email)) return res.status(409).json({ error: 'utilisateur déjà existant' });
  const passwordHash = await bcrypt.hash(password, 10);
  users.set(email, { passwordHash });
  res.status(201).json({ message: 'compte créé' });
});

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body as { email?: string; password?: string };
  const user = email ? users.get(email) : undefined;
  if (!email || !password || !user) return res.status(401).json({ error: 'identifiants invalides' });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: 'identifiants invalides' });
  const token = jwt.sign({ sub: email, role: 'player' }, 'minos-dev-secret', { expiresIn: '2h' });
  res.json({ token });
});
