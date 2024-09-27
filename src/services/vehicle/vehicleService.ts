import { VehicleRepository } from '../../repositories/vehicle/vehicleRepository';

const vehicleRepository = new VehicleRepository();

export const vehicleService = {
  async getVehicleById(id: string) {
    return await vehicleRepository.findById(id);
  },
};
