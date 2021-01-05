# Objetivo
Esse é um projeto prático, que visa, utilizando NodeJs, construir um blog, que contenha diversas funcionalidades, como página administrativa, cadastro de postagens, categorias, autenticação, além de sua hospedagem. 

# Pacotes instalados
- Express
- Handlebars
- Body Parser
- Mongoose
- Bootstrap
- Express Session
- Connect Flash

# Organização
- App.js: arquivo principal, que é o arquivo que é executado.
- models: pasta que contém todos os modelos e a conexão com o banco de dados
- routes: pasta que armazena todas as rotas
- views: pasta que contém os arquivos do formato handlebars, que serão renderizados pelo navegador do usuário. 
- public: guarda todos os arquivos estáticos (CSS, JS, imagens, etc)

# Cookies
São arquivos de texto, que ficam armazenados no navegador do usuário. Neles, informações como preferências de cores, idioma, ou até mesma senhas podem ficar guardadas, e assim, sempre que o usuário visita o site, essas preferências já estão definidas. 

# Sessões
Possuem o mesmo objetivo que os cookies, porém os dados das sessões são guardadas no servidor. 
Uma sessão, ao ser iniciada, envia um cookie ao browser do usuário, com o ID da sessão. Todos os dados relativos a sessão, são enviados ao servidor, relacionados a esse ID. Sempre que o browser fizer uma requisição, ele envia junto o cookie, confirmando o ID da sessão, e permitindo que os dados da sessão que possui aquele ID possam ser acessados. 
Ao fechar o navegador, a sessão é encerrada. 

# Middlewares
É uma parte da aplicação responsável por fazer a intermediação entre o servidor e o usuário, permitindo que tanto as respostas quanto as requisições sejam manipuladas antes de chegarem em seus respectivos destinos. 