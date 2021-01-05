const express = require("express");
const router = express.Router(); // criamos rotas em um arquivo separado assim
const mongoose = require("mongoose");
require("../models/Categoria");

const Categoria = mongoose.model("categorias");

router.get("/", (req, res) => {
  res.render("admin/index");
});

router.get("/posts", (req, res) => {
  res.send("Página de postagens");
});

router.get("/categorias", (req, res) => {
    Categoria.find().then((categorias) =>{
        res.render("admin/categorias", {categorias: categorias.map(categoria => categoria.toJSON())});
    }).catch(err => {
        req.flash('error_msg', 'Erro ao listar as categorias')
        res.redirect('/admin')
    })
});

router.get("/categorias/add", (req, res) => {
  res.render("admin/addcategorias");
});

router.post("/categorias/nova", (req, res) => {
  // validação de erros
  var erros = [];

  if (
    !req.body.nome ||
    typeof req.body.nome === undefined ||
    req.body.nome === null
  ) {
    erros.push({ texto: "Nome inválido" }); // adicionamos um erro ao array
  }

  if (
    !req.body.slug ||
    typeof req.body.slug === undefined ||
    req.body.slug === null
  ) {
    erros.push({ texto: "Slug inválido" });
  }

  if (req.body.nome.length < 2) {
    erros.push({ texto: "Nome da categoria muito pequeno" });
  }

  if (erros.length > 0) {
    res.render("admin/addcategorias", { erros: erros });
  } else {
    const novaCategoria = {
      nome: req.body.nome,
      slug: req.body.slug,
    };

    new Categoria(novaCategoria)
      .save()
      .then(() => {
        req.flash('success_msg', 'Categoria criada com sucesso!');
        res.redirect("/admin/categorias"); // redireciona para essa rota
      })
      .catch((err) => {
        req.flash('error_msg', 'Erro ao salvar a categoria!');
        res.redirect('/admin')
      });
  }
});

router.get('/categorias/edit/:id', (req, res) => {
    Categoria.findOne({_id : req.params.id}).then((categoria) =>{
        res.render('admin/editcategoria', {categoria: categoria.toJSON()})
    }).catch(err =>{
        req.flash('error_msg', 'Esta categoria não existe')
        res.redirect('/admin/categorias')
    })
})

router.post('/categorias/edit', (req, res) => {
    Categoria.findOne({_id: req.body.id}).then(categoria =>{
        categoria.nome = req.body.nome
        categoria.slug = req.body.slug

        categoria.save().then(() => {
            req.flash('success_msg', 'Categoria editada com sucesso')
            res.redirect('/admin/categorias')
        }).catch(err => {
            req.flash('error_msg', 'Erro ao salvar os dados')
        })
    }).catch(err => {
        req.flash('error_msg', 'Erro ao editar a categoria')
        res.redirect('/admin/categorias')
    })
})

module.exports = router; // exportamos as rotas definidas nesse arquivo
