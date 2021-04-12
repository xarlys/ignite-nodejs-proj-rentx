interface IMailProvider {
  sendMail(to: string, subject: string, boby: string): Promise<void>;
}

export { IMailProvider };
