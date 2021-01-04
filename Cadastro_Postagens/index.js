const express = require("express")
const handlebars = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')
const Post = require('./models/Post')
const { get } = require("http")


// Config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

// Rotas

    app.get('/', function(req, res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){ // podemos ordenar de forma que quisermos
            res.render('home', {posts: posts}) // quando queremos passar informações para o frontend, passamos como segundo parametro essa chave
        }) // retorna todas as linhas da tabela posts
        // o then recebe como parametro esses posts
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

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send('Postagem deletada com sucesso')
        }).catch(function(erro){
            res.send('Postagem naum existe!')
        }) // apagamos um item
    })

app.listen(8081, function(){
    console.log('Servidor rodando...')
})