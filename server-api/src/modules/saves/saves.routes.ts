import { Router } from 'express';

const saves = [{ id: 'slot-1', roomId: 'start', hp: 100, difficulty: 'normal' }];
export const savesRouter = Router();

savesRouter.get('/', (_req, res) => {
  res.json(saves);
});

savesRouter.post('/', (req, res) => {
  saves[0] = { ...saves[0], ...req.body };
  res.json(saves[0]);
});
