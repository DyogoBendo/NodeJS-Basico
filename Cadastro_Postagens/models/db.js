const Sequelize = require('sequelize')
    // Conexão com o BD
    const sequilize = new Sequelize('postagens_app', 'root', '', {
        host: 'localhost', 
        dialect: 'mysql'
    })

module.exports = {
    Sequelize: Sequelize,
    sequilize: sequilize 
}
// exportamos as duas constantes semper que algum arquivo chamar db.js