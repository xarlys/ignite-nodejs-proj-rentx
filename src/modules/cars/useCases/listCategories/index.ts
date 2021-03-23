import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesService } from "./ListCategoriesService";

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesService = new ListCategoriesService(categoriesRepository);

const listCategoriesController = new ListCategoriesController(
  listCategoriesService
);

export { listCategoriesController };
