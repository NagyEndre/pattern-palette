// Observer pattern
interface Observer {
  update(p: Publisher): void;
}

interface Publisher {
  attach(o: Observer): void;

  detach(o: Observer): void;

  notify(): void;
}

class ConcretePublisher implements Publisher {
  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (!isExist) {
      this.observers.push(observer);
    }
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    const isObserverKnown = observerIndex !== -1;
    if (isObserverKnown) {
      this.observers.splice(observerIndex, 1);
    }
  }

  public notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public someBusinessLogic(): void {
    this.notify();
  }
}
