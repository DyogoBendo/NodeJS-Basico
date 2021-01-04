# Handlebars
o Handlebars é um Template Engine, o que permite acrescentar funcionalidades o HTML, que passa a poder contar com variáveis, estruturas de repetição e condicionais. Assim, conseguimos inserir dados vindo do banco de dados dentro do HTML. 

Para fazer a instalação, usamos: 
```
npm install --save express-handlebars
```

Após a instalação, precisamos configurar o handlebars. Iniciamos indicando ao express que usaremos como Template Engine o Handlebars. 
```
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
```

Criamos então a pasta `views`, que deve ser escrita exatamente dessa forma. Nela, criamos outra pasta, chamada `layouts`. Que por sua vez, contém um arquivo do tipo handlebars, chamado `main.handlebars`, que é o template padrão da aplicação

Em `handlebars({defaultLayout: 'main'})`, dizemos, que o layout padrão é o main. 

Assim, sempre que criarmos outros arquivos do tipo handlebars, todo o corpo é aproveitado desse main. 

Para um formulário, indicamos a `action` como o nome da rota de destino. 

Rotas do tipo Post não podem ser acessadas pela URL, diferente das GET; 

# Body Parser
Body Parser é uma biblioteca que visa facilitar o trabalho de pegar dados que são passados por um formulário

Instalação:
```
npm install --save body-parser
```

Agora, para pegar qualquer dado vindo de um formulário, usamos: 
```
req.body.nome_campo
```