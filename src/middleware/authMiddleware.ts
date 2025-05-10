import { Request } from 'express';
import authService from '../service/authService';
import { JwtPayload } from '../model/authModel';

// Extension du type Request pour y ajouter l'utilisateur
declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        email: string;
      };
    }
  }
}

/**
 * Fonction d'authentification pour TSOA
 */
export async function expressAuthentication(
  request: Request,
  securityName: string,
  scopes?: string[]
): Promise<JwtPayload> {
  if (securityName === 'jwt') {
    const authHeader = request.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('Accès non autorisé - Token manquant');
    }
    
    // Extraire le token
    const token = authHeader.split(' ')[1];
    
    // Vérifier et décoder le token
    const decodedToken = authService.verifyToken(token);
    
    if (!decodedToken) {
      throw new Error('Accès non autorisé - Token invalide');
    }

    // Pour TSOA, nous retournons directement le payload décodé
    request.user = {
      userId: decodedToken.userId,
      email: decodedToken.email
    };
    
    return decodedToken;
  }
  
  // Si le type de sécurité n'est pas pris en charge
  throw new Error(`Méthode d'authentification non prise en charge: ${securityName}`);
}