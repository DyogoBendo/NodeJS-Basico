const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function (req, res) {
  res.sendFile(__dirname + "/html/sobre.html")
});

app.get("/blog", function (req, res) {
  res.send("Bem vindo ao meu blog");
});

app.get("/ola/:nome", function (req, res) {
  res.send("<h1> Ola " + req.params.nome + "</h1>" + " Batata"); // só podemos usar a função send uma única vez dentro de uma rota
});

app.listen(8081, function () {
  console.log("Servidor rodando!");
});
