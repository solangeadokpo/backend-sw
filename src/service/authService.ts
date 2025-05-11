import { createClient } from '@supabase/supabase-js';
import jwt from 'jsonwebtoken';
import { UserCredentials, AuthResponse, JwtPayload } from '../model/authModel';
import dotenv from 'dotenv';

dotenv.config();

class AuthService {
  private supabase;
  private jwtSecret: string;

  constructor() {
    // Récupérer les variables d'environnement
    const supabaseUrl = process.env.SUPABASE_URL || '';
    const supabaseKey = process.env.SUPABASE_ANON_KEY || '';
    this.jwtSecret = process.env.JWT_SECRET || '';

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Variables d'environnement Supabase manquantes");
    }

    // Initialiser le client Supabase
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  // Connecter un utilisateur
  async login(credentials: UserCredentials): Promise<AuthResponse> {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) {
        return {
          user: null,
          token: null,
          error: error.message
        };
      }

      if (!data.user) {
        return {
          user: null,
          token: null,
          error: 'Authentification échouée'
        };
      }

      // Créer notre propre JWT avec les informations utilisateur
      const payload: JwtPayload = {
        userId: data.user.id,
        email: data.user.email || '',
      };

      const token = jwt.sign(payload, this.jwtSecret, { expiresIn: '24h' });

      return {
        user: {
          id: data.user.id,
          email: data.user.email || '',
        },
        token
      };
    } catch (error) {
      console.error('Erreur de login:', error);
      return {
        user: null,
        token: null,
        error: 'Erreur lors de l\'authentification'
      };
    }
  }

  // Récupérer l'utilisateur courant à partir du token JWT
  async getCurrentUser(token: string): Promise<AuthResponse> {
    try {
      if (!token) {
        return {
          user: null,
          token: null,
          error: 'Token non fourni'
        };
      }

      // Vérifier la validité du token
      const payload = this.verifyToken(token);
      
      if (!payload) {
        return {
          user: null,
          token: null,
          error: 'Token invalide ou expiré'
        };
      }
      
      // Vérifier que l'utilisateur existe toujours dans Supabase
      const { data: userData, error } = await this.supabase.auth.getUser();
      
      if (error || !userData?.user) {
        return {
          user: null,
          token: null,
          error: error?.message || 'Utilisateur non trouvé'
        };
      }
      
      // Retourner les informations de l'utilisateur
      return {
        user: {
          id: payload.userId,
          email: payload.email
        },
        token: null // On ne renvoie pas un nouveau token
      };
      
    } catch (error: any) {
      console.error('Erreur dans getCurrentUser:', error);
      return {
        user: null,
        token: null,
        error: 'Erreur lors de la récupération de l\'utilisateur courant'
      };
    }
  }

  // Déconnecter un utilisateur
  async logout(): Promise<boolean> {
    try {
      const { error } = await this.supabase.auth.signOut();
      if (error) {
        console.error('Erreur lors de la déconnexion:', error);
        return false;
      }
      return true;
    } catch (error) {
      console.error('Erreur de logout:', error);
      return false;
    }
  }

  // Vérifie la validité d'un token JWT
  verifyToken(token: string): JwtPayload | null {
    try {
      return jwt.verify(token, this.jwtSecret) as JwtPayload;
    } catch (error) {
      return null;
    }
  }
}

export default new AuthService();