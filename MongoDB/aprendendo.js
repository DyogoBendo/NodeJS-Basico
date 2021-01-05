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

