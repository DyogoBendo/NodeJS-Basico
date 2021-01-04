# Node e SQL
Essa é a primeira aplicação utilizando MySQL integrado com Express. Para realizar isso, utilizamos um módulo chamado ` Sequelize `. 

## Sequelize
O Sequelize permite que diretamente do Node, possamos manipular um banco de dados. Ele é trabalha como um ORM (Object-relational mapping), ou seja, ele abstrai toda a camada de banco de dados, fazendo com que não seja necessário trabalhar com SQL, mas sim com JavaScript, sendo então muito mais fácil e prático para se fazer uso do banco de dados. 

Para realizar a instalação do Sequilize, utilizamos: 
```
npm install --save sequelize
```

Como iremos trabalhar com o MySQL, devemos instalar mais um módulo: 
```
npm install --save mysql2
```

### Model
Model é uma referência a uma tabela do banco de dados dentro do Sequelize, podendo servir também como uma forma de criar tabelas diretamente do Node. Criaremos dois models: Postagens e Usuarios.  

No caso do model Postagem, ao ser executado o arquivo, é mostrada a seguinte mensagem no console: 
```
Executing (default): CREATE TABLE IF NOT EXISTS `postagens` (`id` INTEGER NOT NULL auto_increment , `titulo` VARCHAR(255), `conteudo` TEXT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `postagens`
```

Depois de criar, é recomendado que deixemos comentado o comando `NomeModel.sync({force: true})`, pois senão, todas as vezes que o script for executado, a tabela será recriada. 

Para inserirmos dados, basta usar:
```
NomeModel.create({
    campo1: dado1
    campo2: dado2
    ....    
```