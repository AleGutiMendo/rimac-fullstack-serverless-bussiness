import { PlanetRepository } from '../../repositories/planet/planetRepository';
import { PlanetRequest } from '../../types/request/planetRequest';

const planetRepository = new PlanetRepository();

export const planetService = {
  async createPlanet(data: PlanetRequest) {
    return await planetRepository.create(data);
  },
};
