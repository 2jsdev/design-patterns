import { Observer } from "./Observer";

export abstract class Observable<T> {
  private observers: Observer<T>[] = [];

  public addObserver(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  public notify(event: T): void {
    this.observers.forEach((observer) => observer.update(event));
  }
}
