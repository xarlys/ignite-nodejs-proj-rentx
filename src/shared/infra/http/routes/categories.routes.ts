import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "@modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "@modules/cars/useCases/listCategories/ListCategoriesController";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";

const categoriesRouter = Router();
const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRouter.post(
  "/",
  ensureAuthenticate,
  ensureAdmin,
  createCategoryController.handle
);

categoriesRouter.get("/", listCategoriesController.handle);

categoriesRouter.post(
  "/import",
  upload.single("file"),
  ensureAuthenticate,
  ensureAdmin,
  importCategoryController.handle
);

export { categoriesRouter };
