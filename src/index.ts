import express from "express";
import cors from "cors";
import { readFileSync } from "fs";

const app = express();
app.use(cors());

function getFileContent(path: string): string {
  return readFileSync(path, { encoding: "utf-8" });
}

app.get("/random", (req, res) => {
  const pattern = getFileContent("./src/exercises/Singleton.ts");
  res.send(pattern);
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
