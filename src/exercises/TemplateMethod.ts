// Template method pattern
abstract class TestSequence {
  public execute() {
    this.prepareEnvironment();
    this.userPreparation();
    this.run();
    this.userCleanUp();
    this.collectResults();
  }

  protected abstract prepareEnvironment(): void;

  protected userPreparation(): void {
    console.log("No user preparation is executed.");
  }

  protected abstract run(): void;

  protected userCleanUp(): void {
    console.log("No user clean up is executed.");
  }

  protected abstract collectResults(): void;
}
