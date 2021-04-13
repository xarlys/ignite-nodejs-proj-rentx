import { Router } from "express";

import { ResetPasswordUserController } from "@modules/accounts/useCases/resetPasswordUser/ResetPasswordUserController";
import { SendForgotPasswordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";

const sendForgotPasswordMail = new SendForgotPasswordMailController();
const resetPasswordUserController = new ResetPasswordUserController();

const passwordRouter = Router();

passwordRouter.post("/forgot", sendForgotPasswordMail.handle);
passwordRouter.post("/reset", resetPasswordUserController.handle);

export { passwordRouter };
