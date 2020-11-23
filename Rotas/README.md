# Importando o Express
Como estamos importando o Express da pasta `node_modules`, não precisamos indicar o caminho para a importação, podemos usar apenas o nome do módulo: 

`const express = require("express")`

O módulo `express` importado retorna uma função que cria o express, para a constante `express`

Por isso, criamos outra constante que recebe o resultado dessa função, chamada `app`. Essa constante possuí todo o framework do express dentro dela. Assim, qualquer coisa que for utilizada do framework express, utilizamos a partir da constante `app`. 

Criamos ela como constante justamente para evitar a sobrescrita das suas informações, e, consequentemente, a perda da aplicação. 

# Abrindo um servidor
Para abrir o servidor usando Express, utilizamos o comando: 

`app.listen(8081)`

A função listen requere um único parâmetro, que é a porta em que será rodada nossa aplicação. Isso é o suficiente para o servidor já estar rodando.

Essa função precisa sempre ser a última do código, pois senão ocorrem diversos erros. 

# Rodar servidor
Para rodar localmente o servidor, basta utilizar o terminal. Dentro da pasta do nosso projeto, usamos o comando: 

`node index.js` 

Para acessar o servidor, basta entrar no navegador, e digitar na URL:

`localhost:número_porta`

No nosso caso, a porta foi determinado como 8081, então a URL é: 

`localhost:8081`

# Retornar mensagem

Para adicionar uma mensagem, do tipo "O servidor está rodando", utilizamos uma função *callback*. 

##  Função Callback
É uma função executada sempre que um evento acontece. 

No nosso caso, quando o servidor estiver escutando (executada a função listen), ou seja, rodando, ele dispara um evento, então uma função callback pode ser executada.

Para fazer isso, escrevemos:

```
app.listen(8081, function(){
  // ação que queremos realizar  
})

```

# Rotas

A rota é um caminho para a aplicação. 

Para criar um rota, escrevemos a linha: 

```
app.get("/", function(req, res){
    // ação que queremos realizar
})
```
Definimos a rota como "/". Geralmente essa é a rota principal. Essa rota é acessada simplismente colocando, no nosso caso, `localhost:8081`

Podemos criar outras rotas, sendo que em cada rota, nossa aplicação executa uma função diferente. Exemplo: 

```
app.get("/sobre", function(req, res){
    res.send("Minha página sobre nós")
})
```

Podemos agora acessar um outra caminho, na mesma URL. Se acessarmos o caminho `/sobre`, a mensagem "Minha página sobre nós" aparece. 

O Express é um framework orientado a rotas, ou seja, toda a aplicação é baseada nessa estrutura de rotas.
