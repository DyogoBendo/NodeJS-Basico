// Carregando Módulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const app = express()
    const admin = require('./routes/admin') // incluimos a rota na constante admin
    const path = require('path') // modulo para trabalhar com caminhos
    const mongoose = require('mongoose') 
    const session = require('express-session')
    const flash = require('connect-flash') // é uma sessão que dura até a página ser recarregada
// Configurações
    // Session
        app.use(session({
            secret: 'cursonode', // chave de acesso
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())
    // Middleware
        app.use((req, res, next)=>{
            res.locals.success_msg = req.flash('success_msg') // cria variavel global
            res.locals.error_msg = req.flash('error_msg')
            next()
        })
    // Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    // Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Mongoose
        mongoose.Promise = global.Promise
        mongoose.connect('mongodb://localhost/blog_app').then(()=>{
            console.log('Conectado ao BD...')
        }).catch(err =>{
            console.log('Erro ao se conectar com o BD: ' + err)
        })
    // Public
        app.use(express.static(path.join(__dirname, 'public'))) // indicamos ao express a pasta que guarda nossos caminhos estáticos

        app.use((req, res, next) =>{
            console.log('Oi sou um middleware')
            next() // permite que continue a requisição
        }) // criando um middleware
// Rotas
    app.use('/admin', admin) // passamos o caminho principal de uma rota, e suas rotas relacionadas
// Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log('Servidor rodando...')
})
