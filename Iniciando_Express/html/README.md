# Renderização de arquivos HTML

Criamos uma pasta html, que contém os arqiuvos html que serão renderizados pelo nosso servidor

No arquivo `index.js`, ao invés de usarmos o comando `send()`, utilizamos `sendFile()`, para renderizar o arquivo HTML quando a rota for acionada, passando como parâmetro o arquivo que queremos exibir. 

Para passar o caminho correto da localização do nosso arquivo, começamos com `__dirname`, que significa que o arquivo está no diretório da nossa aplicação. Usamos isso a fim de evitar erros. 

Concatemos isso com a localização do diretório do arquivo html na nossa pasta atual. Nesse caso, seria em html/index.html

No seguinte exemplo, ao acessarmos a rota principal do nosso programa, o arquivo index.html é retornado: 
```
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});
```