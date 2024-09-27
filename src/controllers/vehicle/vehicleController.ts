// userController.ts
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { vehicleService } from '../../services/vehicle/vehicleService';
import { logger } from '../../utils/logger';

export const getVehicle = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  logger.log('Getting Vehicle');
  const vehicleId = event.pathParameters?.vehicleId;
  logger.log(`Vehicle ID: ${vehicleId}`);
  if (!vehicleId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'vehicles ID is required' }),
    };
  }
  const vehicle = await vehicleService.getVehicleById(vehicleId);
  return {
    statusCode: 200,
    body: JSON.stringify(vehicle),
  };
};
