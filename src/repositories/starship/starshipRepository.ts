// starshipRepository.ts
import { Starship } from '../../models/starship/starship';
import HttpClient from '../../utils/httpClient';
import { logger } from '../../utils/logger';
import { IRepository } from './repositoryInterface';

export class StarshipRepository implements IRepository<Starship> {
  async findById(id: string): Promise<Starship | null> {
    const baseUrl = process.env.BASE_URL;
    if (!baseUrl) {
      throw new Error('BASE_URL is not defined');
    }
    const apiClient = new HttpClient(baseUrl);
    logger.log(`Getting starship with ID: ${id}`);
    const starship : Starship = await apiClient.get(`starships/${id}`);
    logger.log(`Starship: ${JSON.stringify(starship)}`);
    return starship;
  }
}
