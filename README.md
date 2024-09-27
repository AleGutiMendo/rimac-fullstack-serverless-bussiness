# API Documentation - Serverless Framework

## Descripción

Esta API es parte de un servicio serverless que utiliza AWS Lambda, API Gateway y DynamoDB como base de datos. Contiene tres lambdas, dos de tipo `GET` para consultar datos y uno de tipo `POST` para insertar datos.

## Arquitectura

- **Lambda Functions**: 
  - `getStarship`: Consulta un ítem de SWAPI mediante una id.
  - `getVehicle`: Consulta un ítem de SWAPI mediante una id.
  - `createPlanet`: Crea un nuevo ítem en DynamoDB.
  
- **DynamoDB**: Almacena los datos de los planetas. La tabla tiene una clave primaria `planetId`.

## Lambdas

### 1. GET `/starship/{starshipId}` - Obtener un ítem

#### Descripción:
Consulta un ítem en la SWAPI basado en el `id`.

#### Parámetros:
- **starshipId** (Path Parameter): Identificador único del ítem.

#### Respuesta:
- **200 OK**: Devuelve el ítem solicitado.
- **404 Not Found**: Si el ítem no se encuentra en la base de datos.
  
#### Ejemplo de respuesta:
```json
{
  "name": "Death Star",
  "model": "DS-1 Orbital Battle Station",
  "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
  "cost_in_credits": "1000000000000",
  "length": "120000",
  "max_atmosphering_speed": "n/a",
  "crew": "342,953",
  "passengers": "843,342",
  "cargo_capacity": "1000000000000",
  "consumables": "3 years",
  "hyperdrive_rating": "4.0",
  "MGLT": "10",
  "starship_class": "Deep Space Mobile Battlestation",
  "pilots": [],
  "films": [
    "https://swapi.py4e.com/api/films/1/"
  ],
  "created": "2014-12-10T16:36:50.509000Z",
  "edited": "2014-12-20T21:26:24.783000Z",
  "url": "https://swapi.py4e.com/api/starships/9/"
}
```

### 2. GET `/vehicle/{vehicleId}` - Obtener un ítem

#### Descripción:
Consulta un ítem en la SWAPI basado en el `id`.

#### Parámetros:
- **vehicleId** (Path Parameter): Identificador único del ítem.

#### Respuesta:
- **200 OK**: Devuelve el ítem solicitado.
- **404 Not Found**: Si el ítem no se encuentra en la base de datos.
  
#### Ejemplo de respuesta:
```json
{
  "name": "Sand Crawler",
  "model": "Digger Crawler",
  "manufacturer": "Corellia Mining Corporation",
  "cost_in_credits": "150000",
  "length": "36.8 ",
  "max_atmosphering_speed": "30",
  "crew": "46",
  "passengers": "30",
  "cargo_capacity": "50000",
  "consumables": "2 months",
  "vehicle_class": "wheeled",
  "pilots": [],
  "films": [
    "https://swapi.py4e.com/api/films/1/",
    "https://swapi.py4e.com/api/films/5/"
  ],
  "created": "2014-12-10T15:36:25.724000Z",
  "edited": "2014-12-20T21:30:21.661000Z",
  "url": "https://swapi.py4e.com/api/vehicles/4/"
}
```


### 2. POST `/create-planet` - Crear un planeta

#### Descripción:
Crea un planeta en DynamoDB planetsTable.

#### Respuesta:
- **200 OK**: Se creo el item.
- **404 Not Found**: No se pudo crear el item, devuelve el error.
  
#### Ejemplo de request:
```json
{
    "planetId": "1",
    "name": "Naboo",
    "climate": "Template",
    "terrain" : "Not Human"
}
```