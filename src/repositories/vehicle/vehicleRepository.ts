// starshipRepository.ts
import { Vehicle } from '../../models/vehicle/vehicle';
import HttpClient from '../../utils/httpClient';
import { logger } from '../../utils/logger';
import { IRepository } from './repositoryInterface';

export class VehicleRepository implements IRepository<Vehicle> {
  async findById(id: string): Promise<Vehicle | null> {
    const baseUrl = process.env.BASE_URL;
    if (!baseUrl) {
      throw new Error('BASE_URL is not defined');
    }
    const apiClient = new HttpClient(baseUrl);
    logger.log(`Getting starship with ID: ${id}`);
    const vehicle : Vehicle = await apiClient.get(`vehicles/${id}`);
    logger.log(`Starship: ${JSON.stringify(vehicle)}`);
    return vehicle;
  }
}
