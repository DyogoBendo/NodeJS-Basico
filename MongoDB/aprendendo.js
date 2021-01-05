const mongoose = require('mongoose')

// Configuração mongoose
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/aprendendo", {
    useMongoClient: true
}).then(() =>{
    console.log('Deu bom, deu bom!')
}).catch(error => {
    console.log('Deu erro! ' + error)
}) // conexao com o banco de dados
// passamos uma especie de uma URL, no seuinte formato:
// mongdb://endereco_servidor/banco_dados (se não existir é criado automaticamente)

// Model - Usuários
    // definindo o model
        const UsuarioSchema = mongoose.Schema({
            nome: {
                type: String, // os tipos são os mesmos do Javascript
                require: true // se omitirmos esse campo, ele considera como falso
            },
            sobrenome: {
                type: String
            },
            email: {
                type: String
            },
            idade: {
                type: Number
            },
            pais: {
                type: String
            }
        })
    // Collection
        mongoose.model('usuarios', UsuarioSchema) // damos o nome da collection desse model e o model que referencia essa collection

    // Criando um usuário
        const novoUsuario = mongoose.model('usuarios') // referenciamos o Schema
        new novoUsuario({
            nome: 'Dyogo',
            sobrenome: 'Bendo',
            email: 'dd@mail.com',
            idade: 16,
            pais: 'Brasil'
        }).save().then(() => console.log('funcionou')).catch((err) => console.log('deu erro ' + err))


