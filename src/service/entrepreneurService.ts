import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { Entrepreneur, CreateEntrepreneurDto, UpdateEntrepreneurDto, EntrepreneurResponse, AdvancedSearchDto } from '../model/entrepreneurModel';

dotenv.config();

class EntrepreneurService {
  private supabase;

  constructor() {
    // Récupérer les variables d'environnement
    const supabaseUrl = process.env.SUPABASE_URL || '';
    const supabaseKey = process.env.SUPABASE_ANON_KEY || '';

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Variables d'environnement Supabase manquantes");
    }

    // Initialiser le client Supabase
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  // Récupérer tous les entrepreneurs
  async getAllEntrepreneurs(): Promise<EntrepreneurResponse> {
    try {
      const { data, error } = await this.supabase
        .from('entrepreneur')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        return {
          success: false,
          error: error.message
        };
      }

      return {
        success: true,
        data: data as Entrepreneur[]
      };
    } catch (error: any) {
      console.error('Erreur lors de la récupération des entrepreneurs:', error);
      return {
        success: false,
        error: error.message || 'Erreur lors de la récupération des entrepreneurs'
      };
    }
  }

  // Récupérer un entrepreneur par son ID
  async getEntrepreneurById(id: string): Promise<EntrepreneurResponse> {
    try {
      const { data, error } = await this.supabase
        .from('entrepreneur')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        return {
          success: false,
          error: error.message
        };
      }

      if (!data) {
        return {
          success: false,
          error: 'Entrepreneur non trouvé'
        };
      }

      return {
        success: true,
        data: data as Entrepreneur
      };
    } catch (error: any) {
      console.error(`Erreur lors de la récupération de l'entrepreneur ${id}:`, error);
      return {
        success: false,
        error: error.message || "Erreur lors de la récupération de l'entrepreneur"
      };
    }
  }

  // Créer un nouvel entrepreneur
  async createEntrepreneur(entrepreneurData: CreateEntrepreneurDto): Promise<EntrepreneurResponse> {
    try {
      // Vérifier si l'email existe déjà
      const { data: existingUser } = await this.supabase
        .from('entrepreneur')
        .select('email')
        .eq('email', entrepreneurData.email)
        .single();

      if (existingUser) {
        return {
          success: false,
          error: 'Un entrepreneur avec cet email existe déjà'
        };
      }

      const { data, error } = await this.supabase
        .from('entrepreneur')
        .insert([entrepreneurData])
        .select()
        .single();

      if (error) {
        return {
          success: false,
          error: error.message
        };
      }

      return {
        success: true,
        data: data as Entrepreneur,
        message: 'Entrepreneur créé avec succès'
      };
    } catch (error: any) {
      console.error('Erreur lors de la création de l\'entrepreneur:', error);
      return {
        success: false,
        error: error.message || 'Erreur lors de la création de l\'entrepreneur'
      };
    }
  }

  // Mettre à jour un entrepreneur
  async updateEntrepreneur(id: string, updateData: UpdateEntrepreneurDto): Promise<EntrepreneurResponse> {
    try {
      // Vérifier si l'entrepreneur existe
      const { data: existingEntrepreneur } = await this.supabase
        .from('entrepreneur')
        .select('*')
        .eq('id', id)
        .single();

      if (!existingEntrepreneur) {
        return {
          success: false,
          error: 'Entrepreneur non trouvé'
        };
      }

      // Si on met à jour l'email, vérifier qu'il n'est pas déjà utilisé
      if (updateData.email && updateData.email !== existingEntrepreneur.email) {
        const { data: existingEmail } = await this.supabase
          .from('entrepreneur')
          .select('id')
          .eq('email', updateData.email)
          .single();

        if (existingEmail) {
          return {
            success: false,
            error: 'Cet email est déjà utilisé par un autre entrepreneur'
          };
        }
      }

      const { data, error } = await this.supabase
        .from('entrepreneur')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        return {
          success: false,
          error: error.message
        };
      }

      return {
        success: true,
        data: data as Entrepreneur,
        message: 'Entrepreneur mis à jour avec succès'
      };
    } catch (error: any) {
      console.error(`Erreur lors de la mise à jour de l'entrepreneur ${id}:`, error);
      return {
        success: false,
        error: error.message || "Erreur lors de la mise à jour de l'entrepreneur"
      };
    }
  }

  // Supprimer un entrepreneur
  async deleteEntrepreneur(id: string): Promise<EntrepreneurResponse> {
    try {
      // Vérifier si l'entrepreneur existe
      const { data: existingEntrepreneur } = await this.supabase
        .from('entrepreneur')
        .select('id')
        .eq('id', id)
        .single();

      if (!existingEntrepreneur) {
        return {
          success: false,
          error: 'Entrepreneur non trouvé'
        };
      }

      const { error } = await this.supabase
        .from('entrepreneur')
        .delete()
        .eq('id', id);

      if (error) {
        return {
          success: false,
          error: error.message
        };
      }

      return {
        success: true,
        message: 'Entrepreneur supprimé avec succès'
      };
    } catch (error: any) {
      console.error(`Erreur lors de la suppression de l'entrepreneur ${id}:`, error);
      return {
        success: false,
        error: error.message || "Erreur lors de la suppression de l'entrepreneur"
      };
    }
  }

  async searchEntrepreneurs(query: string): Promise<EntrepreneurResponse> {
    try {
      if (!query || query.trim() === '') {
        return this.getAllEntrepreneurs();
      }

      const normalizedQuery = query.trim().toLowerCase();
      const searchPattern = `%${normalizedQuery}%`;

      const searchFields = [
        'last_name',
        'first_name',
        'email',
        'phone',
        'residence_city',
        'residence_department',
        'employment',
        'sector'
      ];

      const orCondition = searchFields
        .map(field => `${field}.ilike.${searchPattern}`)
        .join(',');

      const { data, error } = await this.supabase
        .from('entrepreneur')
        .select('*')
        .or(orCondition)
        .order('created_at', { ascending: false });

      if (error) {
        return {
          success: false,
          error: error.message
        };
      }

      return {
        success: true,
        data: data as Entrepreneur[]
      };
    } catch (error: any) {
      console.error('Erreur lors de la recherche des entrepreneurs:', error);
      return {
        success: false,
        error: error.message || 'Erreur lors de la recherche des entrepreneurs'
      };
    }
  }


  async advancedSearchEntrepreneurs(searchParams: AdvancedSearchDto): Promise<EntrepreneurResponse> {
    try {
      // Vérifier s'il y a des critères de recherche
      if (Object.keys(searchParams).length === 0) {
        return this.getAllEntrepreneurs();
      }

      // Commencer la requête
      let query = this.supabase
        .from('entrepreneur')
        .select('*');

      // Ajouter dynamiquement les filtres si les paramètres existent
      if (searchParams.last_name) {
        query = query.ilike('last_name', `%${searchParams.last_name}%`);
      }
      
      if (searchParams.first_name) {
        query = query.ilike('first_name', `%${searchParams.first_name}%`);
      }
      
      if (searchParams.gender) {
        query = query.eq('gender', searchParams.gender);
      }
      
      if (searchParams.email) {
        query = query.ilike('email', `%${searchParams.email}%`);
      }
      
      if (searchParams.phone) {
        query = query.ilike('phone', `%${searchParams.phone}%`);
      }
      
      if (searchParams.residence_city) {
        query = query.ilike('residence_city', `%${searchParams.residence_city}%`);
      }
      
      if (searchParams.residence_department) {
        query = query.ilike('residence_department', `%${searchParams.residence_department}%`);
      }
      
      if (searchParams.employment) {
        query = query.ilike('employment', `%${searchParams.employment}%`);
      }
      
      if (searchParams.sector) {
        query = query.ilike('sector', `%${searchParams.sector}%`);
      }
      
      // Filtrer par âge si spécifié
      if (searchParams.min_age !== undefined) {
        query = query.gte('age', searchParams.min_age);
      }
      
      if (searchParams.max_age !== undefined) {
        query = query.lte('age', searchParams.max_age);
      }
      
      // Exécuter la requête
      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) {
        return {
          success: false,
          error: error.message
        };
      }

      return {
        success: true,
        data: data as Entrepreneur[]
      };
    } catch (error: any) {
      console.error('Erreur lors de la recherche avancée des entrepreneurs:', error);
      return {
        success: false,
        error: error.message || 'Erreur lors de la recherche avancée des entrepreneurs'
      };
    }
  }

}

export default new EntrepreneurService();