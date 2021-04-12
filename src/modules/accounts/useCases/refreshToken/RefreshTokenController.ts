import { Request, Response } from "express";
import { container } from "tsyringe";

import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const token =
      request.body.token ||
      request.headers["x-access-token"] ||
      request.query.token;

    const refreshTonkenUseCase = container.resolve(RefreshTokenUseCase);

    const refreshToken = await refreshTonkenUseCase.execute(token);

    return response.status(200).json(refreshToken);
  }
}

export { RefreshTokenController };
