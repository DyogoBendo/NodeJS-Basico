const db = require('./db')
const Post = db.sequilize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING,
    }, 
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

// Post.sync({force: true}) // executado apenas uma vez

module.exports = Post