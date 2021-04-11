import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { DevolutionRentalController } from "@modules/rentals/useCases/devolutionRental/DevolutionRentalController";
import { ListRentalsByUserController } from "@modules/rentals/useCases/listRentalsByUser/ListRentalsByUserController";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";

const rentalsRouter = Router();

const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserController();

rentalsRouter.post("/", ensureAuthenticate, createRentalController.handle);
rentalsRouter.post(
  "/devolution/:id",
  ensureAuthenticate,
  devolutionRentalController.handle
);

rentalsRouter.get(
  "/users",
  ensureAuthenticate,
  listRentalsByUserController.handle
);

export { rentalsRouter };
