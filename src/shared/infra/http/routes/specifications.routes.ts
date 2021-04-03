import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "@modules/cars/useCases/listSpecifications/ListSpecificationsController";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";

const specificationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRouter.get("/", listSpecificationsController.handle);

specificationsRouter.post(
  "/",
  ensureAuthenticate,
  ensureAdmin,
  createSpecificationController.handle
);

export { specificationsRouter };
