import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";

const rentalsRouter = Router();

const createRentalController = new CreateRentalController();

rentalsRouter.post("/", ensureAuthenticate, createRentalController.handle);

export { rentalsRouter };
