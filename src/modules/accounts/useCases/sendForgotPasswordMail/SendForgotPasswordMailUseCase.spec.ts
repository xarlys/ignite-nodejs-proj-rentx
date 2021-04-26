import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";

import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let mailProvider: MailProviderInMemory;

describe("Send forgot Email", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    dateProvider = new DayjsDateProvider();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    mailProvider = new MailProviderInMemory();

    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  });

  it("should be able to send an forgot password mail to user", async () => {
    const sendMail = spyOn(mailProvider, "sendMail");

    await usersRepositoryInMemory.create({
      driver_license: "201982",
      email: "uwin@dipakojic.vn",
      name: "Lucy Valdez",
      password: "1234",
    });

    await sendForgotPasswordMailUseCase.execute("uwin@dipakojic.vn");

    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send an email if user does not existis", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("gubuw@rad.vu")
    ).rejects.toEqual(new AppError("User does not exists!"));
  });

  it("shoud be able to create an users token", async () => {
    const generateTokenMail = spyOn(usersTokensRepositoryInMemory, "create");

    await usersRepositoryInMemory.create({
      driver_license: "259674",
      email: "nidecih@kehhav.nu",
      name: "Mabelle Blake",
      password: "123456",
    });

    await sendForgotPasswordMailUseCase.execute("nidecih@kehhav.nu");

    expect(generateTokenMail).toBeCalled();
  });
});
