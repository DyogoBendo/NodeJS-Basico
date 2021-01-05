const express = require('express')
const router = express.Router() // criamos rotas em um arquivo separado assim

router.get('/', (req, res) => {
    res.render('admin/index')
})

router.get('/posts', (req, res) => {
    res.send('Página de postagens')
})

router.get('/categorias', (req, res) =>{
    res.render('admin/categorias')
})

router.get('/categorias/add', (req, res) =>{
    res.render('admin/addcategorias')
})

module.exports = router // exportamos as rotas definidas nesse arquivo