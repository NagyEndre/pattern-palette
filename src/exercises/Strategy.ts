// Strategy pattern
interface StorageStrategy {
  store(data: string): void;
}
class CloudStorage implements StorageStrategy {
  public store(data: string) {
    console.log("Uploading data to cloud.");
  }
}
class LocalStorage implements StorageStrategy {
  public store(data: string) {
    console.log("Saving to hard drive.");
  }
}
class Client {
  private strategy: StorageStrategy;
  public setStrategy(s: StorageStrategy) {
    this.strategy = s;
  }
  public save(data: string) {
    this.strategy.store(data);
  }
}
