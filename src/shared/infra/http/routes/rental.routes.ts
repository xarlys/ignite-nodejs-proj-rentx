import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { DevolutionRentalController } from "@modules/rentals/useCases/devolutionRental/DevolutionRentalController";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";

const rentalsRouter = Router();

const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();

rentalsRouter.post("/", ensureAuthenticate, createRentalController.handle);
rentalsRouter.post(
  "/devolution/:id",
  ensureAuthenticate,
  devolutionRentalController.handle
);

export { rentalsRouter };
