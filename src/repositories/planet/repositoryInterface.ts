import { PlanetRequest } from "../../types/request/planetRequest";

export interface IRepository<T> {
  create(data: PlanetRequest): Promise<T | null>;
}
