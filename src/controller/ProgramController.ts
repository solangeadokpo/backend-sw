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
import { Program } from '../model/programModel';
import * as programService from '../service/programService';

@Route('api/programs')
@Tags('Program')
export class ProgramController extends Controller {
  /**
   * Vérifie si une chaîne est un UUID v4
   */
  private isUUID(id: string): boolean {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
  }

  /**
   * Liste tous les programmes
   */
  @Get('/')
  public async getAll(): Promise<Program[]> {
    return programService.getAllPrograms();
  }

  /**
   * Récupère un programme par son id
   */
  @Get('{id}')
  @TsoaResponse<null>(404, 'Program not found')
  /**
   * @param id L'identifiant du programme (UUID)
   * @example id "87916d1f-9b76-4639-8522-1cf7bcf0d2ff"
   */
  public async getById(@Path() id: string): Promise<Program | { message: string }> {
    if (!this.isUUID(id)) {
      this.setStatus(400);
      return { message: "L'identifiant fourni n'est pas un UUID valide." };
    }
    const program = await programService.getProgramById(id);
    if (!program) {
      this.setStatus(404);
      return { message: "Programme non trouvé." };
    }
    return program;
  }

  /**
   * Crée un nouveau programme
   */
  @SuccessResponse('201', 'Created')
  @Post('/')
  public async create(@Body() body: Omit<Program, 'id' | 'created_at'>): Promise<Program> {
    const program = await programService.createProgram(body);
    this.setStatus(201);
    return program;
  }

  /**
   * Met à jour un programme
   */
  @Put('{id}')
  /**
   * @param id L'identifiant du programme (UUID)
   * @example id "87916d1f-9b76-4639-8522-1cf7bcf0d2ff"
   */
  public async update(@Path() id: string, @Body() body: Partial<Program>): Promise<Program | { message: string }> {
    if (!this.isUUID(id)) {
      this.setStatus(400);
      return { message: "L'identifiant fourni n'est pas un UUID valide." };
    }
    const existing = await programService.getProgramById(id);
    if (!existing) {
      this.setStatus(404);
      return { message: "Programme non trouvé." };
    }
    return programService.updateProgram(id, body);
  }

  /**
   * Supprime un programme
   */
  @Delete('{id}')
  /**
   * @param id L'identifiant du programme (UUID)
   * @example id "87916d1f-9b76-4639-8522-1cf7bcf0d2ff"
   */
  public async remove(@Path() id: string): Promise<{ deleted: boolean; message?: string }> {
    if (!this.isUUID(id)) {
      this.setStatus(400);
      return { deleted: false, message: "L'identifiant fourni n'est pas un UUID valide." };
    }
    const existing = await programService.getProgramById(id);
    if (!existing) {
      this.setStatus(404);
      return { deleted: false, message: "Programme non trouvé." };
    }
    await programService.deleteProgram(id);
    return { deleted: true };
  }

  /**
   * Recherche des programmes par nom, objectif ou type de support (query params)
   * @param name Nom du programme (optionnel)
   * @param objective Objectif du programme (optionnel)
   * @param support_type Type de support (optionnel)
   */
  @Get('/search')
  public async search(
    @Query() name?: string,
    @Query() objective?: string,
    @Query() support_type?: string
  ): Promise<Program[]> {
    return programService.searchPrograms({ name, objective, support_type });
  }
}
