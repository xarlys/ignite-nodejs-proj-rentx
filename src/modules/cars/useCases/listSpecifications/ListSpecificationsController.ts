import { Request, Response } from "express";

import { ListSpecificationsService } from "./ListSpecificationsService";

class ListSpecificationsController {
  constructor(private listSpecificationsService: ListSpecificationsService) {}

  handle(request: Request, response: Response): Response {
    const specifications = this.listSpecificationsService.execute();

    return response.status(200).json(specifications);
  }
}

export { ListSpecificationsController };
