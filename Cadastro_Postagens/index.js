const express = require("express")
const handlebars = require('express-handlebars')
const { get } = require("http")
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

// Rotas
    app.get('/cad', function(req, res){
        res.render('formularios') // queremos renderizar o arquivo do tipo handlebars formulario, que está na pasta views
    })

app.listen(8081, function(){
    console.log('Servidor rodando...')
})