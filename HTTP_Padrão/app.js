/* Utilizando o protocolo HTTP com o módulo padrão do Node
Ele é considerado bem limitado, e por isso para trabalhar com HTTP, geralmente são usados
frameworks, principalmente o Express
 */

 const http = require('http') // módulo http é um módulo padrão que já vem com o Node


 http.createServer(function(req, res){
    // passamos uma função callback para a função createServer
    // res é a response, passando uma resposta ao cliente
    res.end("Ola") // envia mensagem ao cliente
    

 }).listen(8081) // é necessário abrir um servidor http, para poder se comunicar com um cliente
 // na função listen, indicamos em qual porta de rede abriremos nosso servidor

 console.log("Servidor rodando!")
