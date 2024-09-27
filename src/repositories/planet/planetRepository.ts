// starshipRepository.ts
import { PlanetRequest } from '../../types/request/planetRequest';
import { logger } from '../../utils/logger';
import { IRepository } from './repositoryInterface';
import * as AWS from 'aws-sdk';


const dynamoDb = new AWS.DynamoDB.DocumentClient();
export class PlanetRepository implements IRepository<String> {
  async create(data: PlanetRequest): Promise<String | null> {
    const planetsTable = process.env.PLANETS_TABLE;
    if (!planetsTable) {
      throw new Error('PLANETS_TABLE is not defined');
    }
    logger.log(`Planet Data ${JSON.stringify(data)}`);

    try {
      const params = {
        TableName: planetsTable,
        Item: {
         ...data,  // Distancia desde el sol
        },
      };
      logger.log(`Params ${JSON.stringify(params)}`);
      await dynamoDb.put(params).promise();

    return JSON.stringify({ message: 'Planeta registrado con éxito', data: params.Item })

  } catch (error) {
    console.error('Error al insertar datos en DynamoDB:', error);
    return JSON.stringify({ message: 'Error al registrar el planeta', error: (error as Error).message });
  }
}
}
