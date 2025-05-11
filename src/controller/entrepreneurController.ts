import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Put,
  Delete,
  Route,
  Tags,
  Security,
  SuccessResponse,
  Response as TsoaResponse
} from 'tsoa';
import entrepreneurService from '../service/entrepreneurService';
import { 
  Entrepreneur, 
  CreateEntrepreneurDto, 
  UpdateEntrepreneurDto, 
  SimpleSearchDto,
  AdvancedSearchDto
} from '../model/entrepreneurModel';

@Route('api/entrepreneurs')
@Tags('Entrepreneurs')
export class EntrepreneurController extends Controller {
  /**
   * Récupère la liste de tous les entrepreneurs
   */
  @Get()
  @Security('jwt')
  @SuccessResponse('200', 'Liste des entrepreneurs récupérée avec succès')
  @TsoaResponse('500', 'Erreur serveur')
  public async getAllEntrepreneurs(): Promise<{ 
    success: boolean; 
    data?: Entrepreneur[]; 
    message?: string; 
    error?: string 
  }> {
    try {
      const result = await entrepreneurService.getAllEntrepreneurs();
      
      if (!result.success) {
        this.setStatus(500);
        return { 
          success: false, 
          error: result.error || 'Erreur lors de la récupération des entrepreneurs' 
        };
      }
      
      return {
        success: true,
        data: result.data as Entrepreneur[],
        message: 'Liste des entrepreneurs récupérée avec succès'
      };
    } catch (error: any) {
      console.error('Erreur dans le contrôleur getAllEntrepreneurs:', error);
      this.setStatus(500);
      return { 
        success: false, 
        error: 'Erreur serveur' 
      };
    }
  }

  /**
   * Récupère un entrepreneur par son ID
   */
  @Get('{id}')
  @Security('jwt')
  @SuccessResponse('200', 'Entrepreneur récupéré avec succès')
  @TsoaResponse('404', 'Entrepreneur non trouvé')
  @TsoaResponse('500', 'Erreur serveur')
  public async getEntrepreneurById(
    @Path() id: string
  ): Promise<{ 
    success: boolean; 
    data?: Entrepreneur; 
    message?: string; 
    error?: string 
  }> {
    try {
      const result = await entrepreneurService.getEntrepreneurById(id);
      
      if (!result.success) {
        this.setStatus(result.error === 'Entrepreneur non trouvé' ? 404 : 500);
        return { 
          success: false, 
          error: result.error 
        };
      }
      
      return {
        success: true,
        data: result.data as Entrepreneur,
        message: 'Entrepreneur récupéré avec succès'
      };
    } catch (error: any) {
      console.error(`Erreur dans le contrôleur getEntrepreneurById pour l'ID ${id}:`, error);
      this.setStatus(500);
      return { 
        success: false, 
        error: 'Erreur serveur' 
      };
    }
  }

  /**
   * Crée un nouvel entrepreneur
   */
  @Post()
  @Security('jwt')
  @SuccessResponse('201', 'Entrepreneur créé avec succès')
  @TsoaResponse('400', 'Données invalides')
  @TsoaResponse('409', 'Email déjà utilisé')
  @TsoaResponse('500', 'Erreur serveur')
  public async createEntrepreneur(
    @Body() entrepreneurData: CreateEntrepreneurDto
  ): Promise<{ 
    success: boolean; 
    data?: Entrepreneur; 
    message?: string; 
    error?: string 
  }> {
    try {
      // Validation de base
      if (!entrepreneurData.email || !entrepreneurData.first_name || !entrepreneurData.last_name || !entrepreneurData.gender || !entrepreneurData.phone) {
        this.setStatus(400);
        return { 
          success: false, 
          error: 'Tous les champs obligatoires doivent être remplis' 
        };
      }
      
      const result = await entrepreneurService.createEntrepreneur(entrepreneurData);
      
      if (!result.success) {
        // Si l'email est déjà utilisé
        if (result.error?.includes('email existe déjà')) {
          this.setStatus(409);
        } else {
          this.setStatus(500);
        }
        
        return { 
          success: false, 
          error: result.error 
        };
      }
      
      this.setStatus(201);
      return {
        success: true,
        data: result.data as Entrepreneur,
        message: 'Entrepreneur créé avec succès'
      };
    } catch (error: any) {
      console.error('Erreur dans le contrôleur createEntrepreneur:', error);
      this.setStatus(500);
      return { 
        success: false, 
        error: 'Erreur serveur' 
      };
    }
  }

  /**
   * Met à jour un entrepreneur existant
   */
  @Put('{id}')
  @Security('jwt')
  @SuccessResponse('200', 'Entrepreneur mis à jour avec succès')
  @TsoaResponse('400', 'Données invalides')
  @TsoaResponse('404', 'Entrepreneur non trouvé')
  @TsoaResponse('409', 'Email déjà utilisé')
  @TsoaResponse('500', 'Erreur serveur')
  public async updateEntrepreneur(
    @Path() id: string,
    @Body() updateData: UpdateEntrepreneurDto
  ): Promise<{ 
    success: boolean; 
    data?: Entrepreneur; 
    message?: string; 
    error?: string 
  }> {
    try {
      // Vérifier qu'il y a des données à mettre à jour
      if (Object.keys(updateData).length === 0) {
        this.setStatus(400);
        return { 
          success: false, 
          error: 'Aucune donnée fournie pour la mise à jour' 
        };
      }
      
      const result = await entrepreneurService.updateEntrepreneur(id, updateData);
      
      if (!result.success) {
        if (result.error === 'Entrepreneur non trouvé') {
          this.setStatus(404);
        } else if (result.error?.includes('email est déjà utilisé')) {
          this.setStatus(409);
        } else {
          this.setStatus(500);
        }
        
        return { 
          success: false, 
          error: result.error 
        };
      }
      
      return {
        success: true,
        data: result.data as Entrepreneur,
        message: 'Entrepreneur mis à jour avec succès'
      };
    } catch (error: any) {
      console.error(`Erreur dans le contrôleur updateEntrepreneur pour l'ID ${id}:`, error);
      this.setStatus(500);
      return { 
        success: false, 
        error: 'Erreur serveur' 
      };
    }
  }


  /**
   * Recherche simple d'entrepreneurs
   */
  @Post('search')
  @Security('jwt')
  @SuccessResponse('200', 'Recherche effectuée avec succès')
  @TsoaResponse('500', 'Erreur serveur')
  public async searchEntrepreneurs(
    @Body() searchData: SimpleSearchDto
  ): Promise<{ 
    success: boolean; 
    data?: Entrepreneur[]; 
    message?: string; 
    error?: string 
  }> {
    try {
      const result = await entrepreneurService.searchEntrepreneurs(searchData.query);
      
      if (!result.success) {
        this.setStatus(500);
        return { 
          success: false, 
          error: result.error || 'Erreur lors de la recherche des entrepreneurs' 
        };
      }
      
      return {
        success: true,
        data: result.data as Entrepreneur[],
        message: 'Recherche effectuée avec succès'
      };
    } catch (error: any) {
      console.error('Erreur dans le contrôleur searchEntrepreneurs:', error);
      this.setStatus(500);
      return { 
        success: false, 
        error: 'Erreur serveur' 
      };
    }
  }

  /**
   * Recherche avancée d'entrepreneurs avec filtres spécifiques
   */
  @Post('advanced-search')
  @Security('jwt')
  @SuccessResponse('200', 'Recherche avancée effectuée avec succès')
  @TsoaResponse('500', 'Erreur serveur')
  public async advancedSearchEntrepreneurs(
    @Body() searchParams: AdvancedSearchDto
  ): Promise<{ 
    success: boolean; 
    data?: Entrepreneur[]; 
    message?: string; 
    error?: string 
  }> {
    try {
      const result = await entrepreneurService.advancedSearchEntrepreneurs(searchParams);
      
      if (!result.success) {
        this.setStatus(500);
        return { 
          success: false, 
          error: result.error || 'Erreur lors de la recherche avancée des entrepreneurs' 
        };
      }
      
      return {
        success: true,
        data: result.data as Entrepreneur[],
        message: 'Recherche avancée effectuée avec succès'
      };
    } catch (error: any) {
      console.error('Erreur dans le contrôleur advancedSearchEntrepreneurs:', error);
      this.setStatus(500);
      return { 
        success: false, 
        error: 'Erreur serveur' 
      };
    }
  }

  /**
   * Supprime un entrepreneur
   */
  @Delete('{id}')
  @Security('jwt')
  @SuccessResponse('200', 'Entrepreneur supprimé avec succès')
  @TsoaResponse('404', 'Entrepreneur non trouvé')
  @TsoaResponse('500', 'Erreur serveur')
  public async deleteEntrepreneur(
    @Path() id: string
  ): Promise<{ 
    success: boolean; 
    message?: string; 
    error?: string 
  }> {
    try {
      const result = await entrepreneurService.deleteEntrepreneur(id);
      
      if (!result.success) {
        this.setStatus(result.error === 'Entrepreneur non trouvé' ? 404 : 500);
        return { 
          success: false, 
          error: result.error 
        };
      }
      
      return {
        success: true,
        message: 'Entrepreneur supprimé avec succès'
      };
    } catch (error: any) {
      console.error(`Erreur dans le contrôleur deleteEntrepreneur pour l'ID ${id}:`, error);
      this.setStatus(500);
      return { 
        success: false, 
        error: 'Erreur serveur' 
      };
    }
  }
}

// Export pour express
export const entrepreneurController = new EntrepreneurController();