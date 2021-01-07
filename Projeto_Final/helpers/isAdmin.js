// verifica se um usuário é um admin

module.exports = {
    isAdmin: function(req, res, next){
        if(req.isAuthenticated() && req.user.isAdmin == 1){
            return next();
        }
        req.flash('error_msg', 'Você não está autenticado')
        res.redirect('/')
    }
}