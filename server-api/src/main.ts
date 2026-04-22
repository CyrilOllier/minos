import { createApp } from './app.js';

const app = createApp();
const port = Number(process.env.PORT ?? 3001);

app.get('/', (_req, res) => {
  res.send('Minos API OK');
});

app.listen(port, () => {
  console.log(`Minos API en écoute sur http://localhost:${port}`);
});
