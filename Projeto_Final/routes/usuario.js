const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Usuario')
const Usuario = mongoose.model('usuarios')
const bcrypt = require('bcryptjs')
const passport = require('passport')

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
        Usuario.findOne({email: req.body.email}).then(usuario => {
            if(usuario){
                req.flash('error_msg', 'Ja existe uma conta com esse email')
                res.redirect('/usuarios/registro')
            } else{
                const novoUsuario = new Usuario({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha
                })

                bcrypt.genSalt(10, (erro, salt) => {
                    bcrypt.hash(novoUsuario.senha, salt, (erro, hash) =>{
                        if(erro){
                            req.flash('error_msg', 'Errono salvamento')
                            res.redirect('/')
                        }else{
                            novoUsuario.senha = hash

                            novoUsuario.save().then(()=>{
                                req.flash('success_msg', 'Salvo com sucesso!')
                                res.redirect('/')
                            }).catch(err => {
                                req.flash('error_msg', 'Erro ao criar usuario')
                                res.redirect('/usuarios/registro')
                            })
                        }
                    })
                })
            }
        } ).catch(err => {
            req.flash('error_msg', 'Houve um erro')
            res.redirect('/')
        })
    }
})

router.get('/login', (req, res) => {
    res.render('usuarios/login')
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',  // onde direciona quando funciona
        failureRedirect: '/usuarios/login',  // onde redireciona quando da erro
        failureFlash: true

    }) (req, res, next)
})

module.exports = router