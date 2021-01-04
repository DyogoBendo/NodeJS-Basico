const Sequelize = require('sequelize')
const sequelize = new Sequelize('curso_node', 'root', '', {
    host: 'localhost', 
    dialect: 'mysql'
}) 

/* 
colocamos como parâmetro o nome do banco de dados, 
depois o usuário do banco,
a senha 
e um um objeto, que indica qual o servidor do banco de dados e qual o tipo de banco de dados
*/

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!')
}).catch(function(erro){
    console.log('Erro ao se conectar!' + erro)
}) // verifica se conseguimos de conectar ao banco de dados

// o then() e catch() funcionam como um try catch

