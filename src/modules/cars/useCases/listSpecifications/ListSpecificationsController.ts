import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationsService } from "./ListSpecificationsService";

class ListSpecificationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSpecificationsService = container.resolve(
      ListSpecificationsService
    );

    await listSpecificationsService.execute();

    return response.status(200).json(listSpecificationsService);
  }
}

export { ListSpecificationsController };
