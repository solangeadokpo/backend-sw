import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import { RegisterRoutes } from './generated/tsoa/routes';
// Import du contrôleur company pour tsoa (nécessaire pour la génération des routes)
import '../src/controller/CompanyController';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
  origin: process.env.CORS_ORIGIN || '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Charger les variables d'environnement
dotenv.config();

app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenue sur la plateforme de suivi !');
});

// Enregistrer les routes générées par TSOA
RegisterRoutes(app);

// Configuration de Swagger UI
try {
  const swaggerDocument = require('./generated/tsoa/swagger.json');
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (err) {
  console.error('Impossible de charger le fichier swagger.json. Exécutez d\'abord la commande "npm run tsoa".');
}

// Middleware de gestion des erreurs
app.use((err: any, req: Request, res: Response, next: Function) => {
  console.error(err);
  
  const status = err.status || 500;
  const message = err.message || 'Une erreur est survenue';
  
  res.status(status).send({
    status,
    message,
  });
});

// Middleware pour les routes non trouvées
app.use((req: Request, res: Response) => {
  res.status(404).send({
    status: 404,
    message: 'Route non trouvée',
  });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
  console.log(`Documentation Swagger disponible sur http://localhost:${PORT}/docs`);
});