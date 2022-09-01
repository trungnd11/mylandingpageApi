import express from "express";

const app = express();
const port = 8085;

app.get("/", (req, res) => {
  res.send("The sedulous hyena ate the antelope!");
})

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
})