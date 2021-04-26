import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCategoryService } from "./CreateCategoryService";

let createCategoryService: CreateCategoryService;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create a new Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryService = new CreateCategoryService(
      categoriesRepositoryInMemory
    );
  });

  it("shold be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      description: "Create Category Test",
    };
    await createCategoryService.execute({
      name: category.name,
      description: category.description,
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });

  it("shold not be able to create a new category with name exists", async () => {
    const category = {
      name: "Category Exists Test",
      description: "Create Exists Category Test",
    };

    await createCategoryService.execute({
      name: category.name,
      description: category.description,
    });

    await expect(
      createCategoryService.execute({
        name: category.name,
        description: category.description,
      })
    ).rejects.toEqual(new AppError("Category already exists!"));
  });
});
