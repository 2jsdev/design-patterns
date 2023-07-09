import { User } from "../entity/User";
import { UserRegistered } from "../entity/UserRegistered";
import { UserRepository } from "../entity/UserRepository";
import { WorkspaceRepository } from "../entity/WorkspaceRepository";
import { Observable } from "./Observable";

export class UserSignUpServiceManagerHandler extends Observable<UserRegistered> {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly workspaceRepository: WorkspaceRepository
  ) {
    super();
  }

  async signUp(
    id: string,
    name: string,
    emailAddress: string,
    password: string
  ): Promise<void> {
    console.log("1 - Register user");
    const user = new User(id, name, emailAddress, password);
    this.userRepository.save(user);

    const userRegistered = new UserRegistered(id, name, emailAddress, password);
    this.notify(userRegistered);
  }
}
