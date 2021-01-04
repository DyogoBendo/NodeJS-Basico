const express = require("express")
const handlebars = require('express-handlebars')
const app = express()
const Sequelize = require('sequelize')



// Config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Conexão com o BD
        const sequilize = new Sequelize('curso_node', 'root', '', {
            host: 'localhost', 
            dialect: 'mysql'
        })

app.listen(8081, function(){
    console.log('Servidor rodando...')
})