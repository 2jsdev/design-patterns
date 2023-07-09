import { Application, Request, Response } from "express";

import { UserRepository } from "../entity/UserRepository";
import { WorkspaceRepository } from "../entity/WorkspaceRepository";
import { Mailer } from "../service/Mailer";
import { SendWelcomeEmail } from "../service/SendWelcomeEMail";
import { UserSignUpServiceManagerHandler } from "../service/UserSignUpServiceManagerHandler";

export const loadApiEndpoints = (app: Application): void => {
  app.get("/api/signup", async (req: Request, res: Response) => {
    const sendWelcomeEmail = new SendWelcomeEmail(new Mailer());
    const signup = new UserSignUpServiceManagerHandler(
      new UserRepository(),
      new WorkspaceRepository()
    );

    // signup.addObserver(sendWelcomeEmail);

    await signup.signUp(
      "875c1c7f-d7e8-4c87-8d27-c695b916c60d",
      "Name Surname",
      "soporte@2jsdev.me",
      "Admin1234"
    );

    return res.status(201).send({});
  });
};
