import { Component } from "./component";

export interface Mediator<T> {
  notify (sender: Component<T>, event: T): void
}
