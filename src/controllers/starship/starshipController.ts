// userController.ts
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { starshipService } from '../../services/starship/starshipService';
import { logger } from '../../utils/logger';

export const getStarship = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  logger.log('Getting starship');
  const starshipId = event.pathParameters?.starshipId;
  logger.log(`Starship ID: ${starshipId}`);
  if (!starshipId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Starship ID is required' }),
    };
  }
  const starship = await starshipService.getStarshipById(starshipId);
  return {
    statusCode: 200,
    body: JSON.stringify(starship),
  };
};
