import cors from "cors";
import express from "express";
import { readFileSync, readdirSync } from "fs";
import ExerciseIndexGenerator, {
  getRandomNumber,
} from "./ExerciseIndexGenerator";

const app = express();
app.use(cors());

const exerciseFiles = readdirSync("./src/exercises");
const exerciseCount = exerciseFiles.length;
const exerciseIndexGenerator = new ExerciseIndexGenerator(
  getRandomNumber,
  exerciseCount
);

app.get("/random", (req, res) => {
  const index = exerciseIndexGenerator.getNext();

  const path = `./src/exercises/${exerciseFiles[index]}`;
  let pattern = readFileSync(path, { encoding: "utf-8" });
  pattern = pattern.trimEnd();

  res.send(pattern);
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
