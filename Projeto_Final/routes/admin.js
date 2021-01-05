const express = require('express')
const router = express.Router() // criamos rotas em um arquivo separado assim

router.get('/', (req, res) => {
    res.send('Pagina principal do painel administartivo')
})

router.get('/posts', (req, res) => {
    res.send('Página de postagens')
})

router.get('/cat', (req, res) =>{
    res.send('Pagina de categorias')
})

module.exports = router // exportamos as rotas definidas nesse arquivo