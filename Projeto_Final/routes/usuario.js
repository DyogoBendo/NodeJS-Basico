const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Usuario')
const Usuario = mongoose.model('usuarios')

router.get('/registro', (req, res) => {
    res.render('usuarios/registro')
})

router.post('/registro', (req, res) => {
    var erros = []

    if(!req.body.nome || typeof req.body.nome == undefined || typeof req.body.nome == null){
        erros.push({texto: 'nome invalido'})
    }
    if(!req.body.email || typeof req.body.email == undefined || typeof req.body.email == null){
        erros.push({texto: 'email invalido'})
    }
    if(!req.body.senha || typeof req.body.senha == undefined || typeof req.body.senha == null){
        erros.push({texto: 'senha invalida'})
    }
    if(req.body.senha.length < 4){
        erros.push({texto: 'senha muito curta'})
    }
    if(req.body.senha != req.body.senha2){
        erros.push({texto: 'Senhas não são idênticas'})
    }

    if(erros.length > 0){
        res.render('usuarios/registro', {erros: erros})
    }else{
        // a seguir
    }
})

module.exports = router