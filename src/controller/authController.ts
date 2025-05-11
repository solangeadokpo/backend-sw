import {
  Body,
  Controller,
  Post,
  Route,
  Tags,
  SuccessResponse,
  Request,
  Security,
  Response as TsoaResponse
} from 'tsoa';
import * as express from 'express';
import authService from '../service/authService';
import { UserCredentials, CurrentUserResponse } from '../model/authModel';

@Route('api/auth')
@Tags('Authentification')
export class AuthController extends Controller {
  /**
   * Authentifie un utilisateur et renvoie un token JWT
   */
  @Post('login')
  @SuccessResponse('200', 'Connexion réussie')
  @TsoaResponse('400', 'Données invalides')
  @TsoaResponse('401', 'Authentification échouée')
  @TsoaResponse('500', 'Erreur serveur')
  public async login(
    @Body() credentials: UserCredentials
  ): Promise<{ user: { id: string; email: string } | null; token: string | null; message?: string; error?: string }> {
    try {
      // Validation de base
      if (!credentials.email || !credentials.password) {
        this.setStatus(400);
        return { user: null, token: null, error: 'Email et mot de passe requis' };
      }
      
      const authResponse = await authService.login(credentials);
      
      if (authResponse.error) {
        this.setStatus(401);
        return { user: null, token: null, error: authResponse.error };
      }
      
      return {
        user: authResponse.user,
        token: authResponse.token,
        message: 'Connexion réussie'
      };
    } catch (error) {
      console.error('Erreur dans le contrôleur login:', error);
      this.setStatus(500);
      return { user: null, token: null, error: 'Erreur serveur' };
    }
  }

  /**
   * Récupère l'utilisateur actuellement connecté
   */
  @Post('me')
  @Security('jwt')
  @SuccessResponse('200', 'Utilisateur récupéré avec succès')
  @TsoaResponse('401', 'Non authentifié')
  @TsoaResponse('500', 'Erreur serveur')
  public async getCurrentUser(
    @Request() request: express.Request
  ): Promise<CurrentUserResponse> {
    try {
      // Récupérer le token depuis l'en-tête d'autorisation
      const authHeader = request.headers.authorization;
      
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        this.setStatus(401);
        return { user: null, error: 'Token d\'authentification non fourni' };
      }
      
      const token = authHeader.split(' ')[1];
      const result = await authService.getCurrentUser(token);
      
      if (!result.user) {
        this.setStatus(401);
        return { user: null, error: result.error || 'Non authentifié' };
      }
      
      return {
        user: result.user,
        message: 'Utilisateur récupéré avec succès'
      };
    } catch (error: any) {
      console.error('Erreur dans le contrôleur getCurrentUser:', error);
      this.setStatus(500);
      return { user: null, error: 'Erreur serveur' };
    }
  }



  /**
   * Déconnecte un utilisateur
   */
  @Post('logout')
  @SuccessResponse('200', 'Déconnexion réussie')
  @TsoaResponse('500', 'Erreur lors de la déconnexion')
  public async logout(): Promise<{ message?: string; error?: string }> {
    try {
      const success = await authService.logout();
      
      if (success) {
        return { message: 'Déconnexion réussie' };
      } else {
        this.setStatus(500);
        return { error: 'Erreur lors de la déconnexion' };
      }
    } catch (error) {
      console.error('Erreur dans le contrôleur logout:', error);
      this.setStatus(500);
      return { error: 'Erreur serveur' };
    }
  }
}

// Export pour express
export const authController = new AuthController();