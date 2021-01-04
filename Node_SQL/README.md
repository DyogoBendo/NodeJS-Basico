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