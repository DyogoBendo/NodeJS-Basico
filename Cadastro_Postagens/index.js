const express = require("express")
const handlebars = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')


// Config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

// Rotas
    app.get('/cad', function(req, res){
        res.render('formularios') // queremos renderizar o arquivo do tipo handlebars formulario, que está na pasta views
    })

    app.post('/add', function(req, res){ // como usamos o metodo post no formulario, devemos usar o mesmo metodo na rota
        req.body.conteudo
        res.send('Texto ' + req.body.conteudo)
    })

app.listen(8081, function(){
    console.log('Servidor rodando...')
})