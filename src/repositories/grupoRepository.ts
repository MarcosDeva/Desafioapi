import { AppDataSource } from "../data-source";
import { Grupo } from "../entities/Grupo";

export const grupoRepository = AppDataSource.getRepository(Grupo)
