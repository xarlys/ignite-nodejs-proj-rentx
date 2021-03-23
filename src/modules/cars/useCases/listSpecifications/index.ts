import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsService } from "./ListSpecificationsService";

const specificationsRepository = SpecificationsRepository.getInstance();

const listSpecificationsService = new ListSpecificationsService(
  specificationsRepository
);

const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsService
);

export { listSpecificationsController };
