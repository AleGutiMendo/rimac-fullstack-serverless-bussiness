// userController.ts
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { planetService } from '../../services/planet/planetService';
import { logger } from '../../utils/logger';

export const createPlanet = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  logger.log('Create planet');
  const planetBody = event.body ? JSON.parse(event.body) : null;
  logger.log(`Planet Body: ${JSON.stringify(planetBody)}`);
  if (!planetBody) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Planet Body is required' }),
    };
  }
  const planet = await planetService.createPlanet(planetBody);
  return {
    statusCode: 200,
    body: JSON.stringify(planet),
  };
};
