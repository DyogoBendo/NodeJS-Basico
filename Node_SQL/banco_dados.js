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


// Models 

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING // tipo do campo é varchar
    }, 
    conteudo: {
        type: Sequelize.TEXT // tipo de varchar `longa`
    }
}) 

// Geramos o model Postagem, que possui a definição de uma tabela, chamada postagems
// e que tem os atributos titulo e conteudo

// Postagem.sync({force: true}) // esse metodo sincroniza o model com o banco de dados, gerando a tabela também no banco

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    }, 
    sobrenome: {
        type: Sequelize.STRING
    }, 
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Usuario.sync({force: true})


// Inserindo dados

Postagem.create({
    titulo: 'Sherck III',
    conteudo: 'Melhor filme feito pela humanidade'
})

Usuario.create({
    nome: 'Pedro', 
    sobrenome: 'Arold', 
    idade: 16,
    email: 'pedrin@outlok.caum'

})