import { Mediator } from "./mediator";

export class Component<T> {
  constructor(
    protected mediator?: Mediator<T>
  ) {}

  public setMediator(mediator: Mediator<T>): void {
    this.mediator = mediator
  }
}
