import express from "express";
import cors from "cors";
import { readFileSync, readdirSync } from "fs";
import ExerciseRandomizer, { getRandomNumber } from "./ExerciseRandomizer";

const app = express();
app.use(cors());

function getFileContent(path: string): string {
  return readFileSync(path, { encoding: "utf-8" });
}
const exerciseFiles = readdirSync("./src/exercises");
const exerciseCount = exerciseFiles.length;
const exerciseRandomizer = new ExerciseRandomizer(
  getRandomNumber,
  exerciseCount
);

app.get("/random", (req, res) => {
  const index = exerciseRandomizer.getNextExerciseIndex();

  let pattern = getFileContent(`./src/exercises/${exerciseFiles.at(index)}`);
  pattern = pattern.trimEnd();

  res.send(pattern);
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
