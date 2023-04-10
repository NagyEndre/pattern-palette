export default class ExerciseIndexGenerator {
  private readonly exerciseCount: number;
  private previousIndex: number | null = null;

  private readonly randomIndexGenerator: (max: number) => number;

  constructor(
    randomIndexGenerator: (max: number) => number,
    exerciseCount: number
  ) {
    if (exerciseCount < 1) {
      throw new Error("At least 1 exercise must be provided.");
    }
    this.exerciseCount = exerciseCount;
    this.randomIndexGenerator = randomIndexGenerator;
  }

  public getNextExerciseIndex(): number {
    if (this.exerciseCount === 1) {
      return 0;
    }
    const max = this.exerciseCount;

    let randomIndex = this.randomIndexGenerator(max);
    while (randomIndex === this.previousIndex) {
      randomIndex = this.randomIndexGenerator(max);
    }

    this.previousIndex = randomIndex;
    return randomIndex;
  }
}

export function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}
