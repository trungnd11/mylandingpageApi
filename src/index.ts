import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


const app = express();
const port = process.env.PORT || 8085;

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

app.get("/", (req, res) => {
  res.send("Hello! This is Trung's nodejs project!");
})

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
})