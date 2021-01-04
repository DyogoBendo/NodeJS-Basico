const express = require("express")
const handlebars = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')
const Post = require('./models/Post')


// Config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

// Rotas

    app.get('/', function(req, res){
        res.render('home')
    })

    app.get('/cad', function(req, res){
        res.render('formularios') // queremos renderizar o arquivo do tipo handlebars formulario, que está na pasta views
    })

    app.post('/add', function(req, res){ // como usamos o metodo post no formulario, devemos usar o mesmo metodo na rota
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/') // redirecionamos para uma outra rota
        }).catch(function(erro){
            res.send('Erro em criar o post!')
        })
    })

app.listen(8081, function(){
    console.log('Servidor rodando...')
})