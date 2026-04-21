import { Router } from 'express';

export const usersRouter = Router();
usersRouter.get('/me', (_req, res) => {
  res.json({ email: 'player@minos.local', role: 'player', createdAt: new Date().toISOString() });
});
