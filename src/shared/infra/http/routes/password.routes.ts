import { Router } from "express";

import { SendForgotPasswordMailController } from "@modules/sendForgotPasswordMail/SendForgotPasswordMailController";

const sendForgotPasswordMail = new SendForgotPasswordMailController();

const passwordRouter = Router();

passwordRouter.post("/forgot", sendForgotPasswordMail.handle);

export { passwordRouter };
