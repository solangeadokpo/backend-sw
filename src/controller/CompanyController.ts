import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
  Route,
  Tags,
  Path,
  SuccessResponse,
  Response as TsoaResponse
} from 'tsoa';
import { Company } from '../model/companyModel';
import * as companyService from '../service/companyService';

@Route('api/companies')
@Tags('Company')
export class CompanyController extends Controller {
  /**
   * Vérifie si une chaîne est un UUID v4
   */
  private isUUID(id: string): boolean {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
  }

  /**
   * Liste toutes les entreprises
   */
  @Get('/')
  public async getAll(): Promise<Company[]> {
    return companyService.getAllCompanies();
  }

  /**
   * Recherche des entreprises par nom, secteur ou ville (query params)
   * @param name Nom de l'entreprise (optionnel)
   * @param sector Secteur d'activité (optionnel)
   * @param location_city Ville (optionnel)
   */
  @Get('/search')

  /**
   * Récupère une entreprise par son id
   * @param id L'identifiant de l'entreprise (UUID)
   * @example id "87916d1f-9b76-4639-8522-1cf7bcf0d2ff"
   */
  @Get('{id}')
  @TsoaResponse<null>(404, 'Company not found')
  public async getById(@Path() id: string): Promise<Company | { message: string }> {
    if (!this.isUUID(id)) {
      this.setStatus(400);
      return { message: "L'identifiant fourni n'est pas un UUID valide." };
    }
    const company = await companyService.getCompanyById(id);
    if (!company) {
      this.setStatus(404);
      return { message: "Entreprise non trouvée." };
    }
    return company;
  }

  /**
   * Crée une nouvelle entreprise
   */
  @SuccessResponse('201', 'Created')
  @Post('/')
  public async create(@Body() body: Omit<Company, 'id' | 'created_at'>): Promise<Company | { message: string }> {
    // Validation revenue
    if (body.revenue !== undefined && body.revenue !== null && isNaN(Number(body.revenue))) {
      this.setStatus(400);
      return { message: "Le champ revenue doit être un nombre décimal valide (ex: '12345.67')." };
    }
    const company = await companyService.createCompany(body);
    this.setStatus(201);
    return company;
  }

  /**
   * Met à jour une entreprise
   * @param id L'identifiant de l'entreprise (UUID)
   * @example id "87916d1f-9b76-4639-8522-1cf7bcf0d2ff"
   */
  @Put('{id}')
  public async update(@Path() id: string, @Body() body: Partial<Company>): Promise<Company | { message: string }> {
    if (!this.isUUID(id)) {
      this.setStatus(400);
      return { message: "L'identifiant fourni n'est pas un UUID valide." };
    }
    // Validation revenue
    if (body.revenue !== undefined && body.revenue !== null && isNaN(Number(body.revenue))) {
      this.setStatus(400);
      return { message: "Le champ revenue doit être un nombre décimal valide (ex: '12345.67')." };
    }
    const existing = await companyService.getCompanyById(id);
    if (!existing) {
      this.setStatus(404);
      return { message: "Entreprise non trouvée." };
    }
    return companyService.updateCompany(id, body);
  }

  /**
   * Supprime une entreprise
   * @param id L'identifiant de l'entreprise (UUID)
   * @example id "87916d1f-9b76-4639-8522-1cf7bcf0d2ff"
   */
  @Delete('{id}')
  public async remove(@Path() id: string): Promise<{ deleted: boolean; message?: string }> {
    if (!this.isUUID(id)) {
      this.setStatus(400);
      return { deleted: false, message: "L'identifiant fourni n'est pas un UUID valide." };
    }
    const existing = await companyService.getCompanyById(id);
    if (!existing) {
      this.setStatus(404);
      return { deleted: false, message: "Entreprise non trouvée." };
    }
    await companyService.deleteCompany(id);
    return { deleted: true };
  }

  /**
   * Recherche des entreprises par nom, secteur ou ville (query params)
   * @param name Nom de l'entreprise (optionnel)
   * @param sector Secteur d'activité (optionnel)
   * @param location_city Ville (optionnel)
   */
  @Get('/search')
  public async search(
    @Query() name?: string,
    @Query() sector?: string,
    @Query() location_city?: string
  ): Promise<Company[]> {
    // Aucune validation UUID ici : on renvoie toujours la recherche
    return companyService.searchCompanies({ name, sector, location_city });
  }
}

