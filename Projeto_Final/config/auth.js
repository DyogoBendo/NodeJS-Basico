const localstrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Model de usuario
require("../models/Usuario");
const Usuario = mongoose.model("usuarios");

module.exports = function (passport) {
  passport.use(
    new localstrategy(
      {
        usernameField: "email", // campo analisado, que eh unico
        passwordField: 'senha'
      },
      (email, senha, done) => {
        Usuario.findOne({ email: email }).then((usuario) => {
          if (!usuario) {
            return done(null, false, { message: "Conta não existe" }); // dados da conta autenticada; se autenticacao ocorreu com sucesso; uma mensagem
          } else {
              console.log('klsajdklasd')
            bcrypt.compare(senha, usuario.senha, (erro, batem) => {
              if (batem) {
                return done(null, usuario);
              } else {
                return done(null, false, { message: "Credenciais incorretas" });
              }
            });
          }
        });
      }
    )
  );
  passport.serializeUser((user, done) => { // salva os dados do usuario em uma sessão
    done (null, user.id)
  });

  passport.deserializeUser((id, done) => {
      Usuario.findById(id, (err, usuario) => {
          done(err, usuario)
      })
  })
};
