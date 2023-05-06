// Client code of Observer pattern
const publisher = new ConcretePublisher();

const observer1 = new ObserverA();
publisher.attach(observer1);

const observer2 = new ObserverB();
publisher.attach(observer2);

publisher.doBusinessLogic();
publisher.doBusinessLogic();

publisher.detach(observer2);

publisher.doBusinessLogic();
