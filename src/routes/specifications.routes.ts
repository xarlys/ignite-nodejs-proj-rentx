import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../modules/cars/useCases/listSpecifications/ListSpecificationsController";

const specificationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRouter.get("/", listSpecificationsController.handle);

specificationsRouter.post("/", createSpecificationController.handle);

export { specificationsRouter };
