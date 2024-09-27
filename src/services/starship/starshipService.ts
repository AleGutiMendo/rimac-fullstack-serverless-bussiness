import { StarshipRepository } from '../../repositories/starship/starshipRepository';

const starshipRepository = new StarshipRepository();

export const starshipService = {
  async getStarshipById(id: string) {
    return await starshipRepository.findById(id);
  },
};
