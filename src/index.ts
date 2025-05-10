import express, { Request, Response } from 'express';
import { setupSwagger } from "./swagger";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
setupSwagger(app);

app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenue sur la plateforme de suivi !');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
