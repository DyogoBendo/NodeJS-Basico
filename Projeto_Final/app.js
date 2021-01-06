// Carregando Módulos
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();
const admin = require("./routes/admin"); // incluimos a rota na constante admin
const path = require("path"); // modulo para trabalhar com caminhos
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash"); // é uma sessão que dura até a página ser recarregada
const Postagem = mongoose.model("postagens");
const Categoria = mongoose.model("categorias");
const usuario = require('./routes/usuario')
// Configurações
// Session
app.use(
  session({
    secret: "cursonode", // chave de acesso
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());
// Middleware
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg"); // cria variavel global
  res.locals.error_msg = req.flash("error_msg");
  next();
});
// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Mongoose
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/blog_app")
  .then(() => {
    console.log("Conectado ao BD...");
  })
  .catch((err) => {
    console.log("Erro ao se conectar com o BD: " + err);
  });
// Public
app.use(express.static(path.join(__dirname, "public"))); // indicamos ao express a pasta que guarda nossos caminhos estáticos

app.use((req, res, next) => {
  console.log("Oi sou um middleware");
  next(); // permite que continue a requisição
}); // criando um middleware
// Rotas
app.get("/", (req, res) => {
  Postagem.find()
    .populate("categoria")
    .sort({ data: "desc" })
    .then((postagens) => {
      res.render("index", {
        postagens: postagens.map((postagem) => postagem.toJSON()),
      });
    })
    .catch((err) => {
      req.flash("error_msg", "Erro interno");
      res.redirect("/404");
    });
});

app.get("/404", (req, res) => {
  res.send("Erro 404!");
});

app.get("/postagens/:slug", (req, res) => {
  Postagem.findOne({ slug: req.params.slug })
    .then((postagem) => {
      if (postagem) {
        res.render("postagem/index", { postagem: postagem.toJSON() });
      } else {
        req.flash("error_msg", "Esta postagem não existe");
        res.redirect("/");
      }
    })
    .catch((err) => {
      req.flash("error_msg", "Problema interno");
      res.redirect("/");
    });
});

app.get("/categorias", (req, res) => {
  Categoria.find()
    .then((categorias) => {
      res.render("categorias/index", {
        categorias: categorias.map((categoria) => categoria.toJSON()),
      });
    })
    .catch((err) => {
      req.flash("errpr_msg", "Erro interno ao listar categorias");
      res.redirect("/");
    });
});
app.get("/categorias/:slug", (req, res) => {
  Categoria.findOne({ slug: req.params.slug })
    .then((categoria) => {
      if (categoria) {
        Postagem.find({ categoria: categoria._id })
          .then((postagens) => {
            res.render("categorias/postagens", {
              postagens: postagens.map((postagem) => postagem.toJSON()),
              categoria: categoria.toJSON()
            });
          })
          .catch((err) => {
            req.flash("error_msg", "Categoria não existe!");
            res.redirect("/");
          });
      } else {
        req.flash("error_msg", "Categoria não existe!");
        res.redirect("/");
      }
    })
    .catch((err) => {
      req.flash("error_msg", "Erro interno");
      res.redirect("/");
    });
});

app.use("/admin", admin); // passamos o caminho principal de uma rota, e suas rotas relacionadas
app.use('/usuarios', usuario)
// Outros
const PORT = 8081;
app.listen(PORT, () => {
  console.log("Servidor rodando...");
});
