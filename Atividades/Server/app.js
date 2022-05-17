const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

var alunos = [];
var id = 1;

app.use(express.json());

app.get("/alunos", (req, res) => {
  res.send(alunos);
});

app.post("/alunos", (req, res) => {
  var data = req.body;
  data = { id, ...data };
  alunos.push(data);
  id++;
  res.send("Aluno cadastrado").status(200);
});

app.listen(8081, () => {
  console.log("rondando em http://localhost:8081");
});
