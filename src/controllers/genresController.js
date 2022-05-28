const db = require('../database/models');

const genresController= {

    list: function (req,res){
        db.Genre.findAll()
        .then(function(generos){
            res.render('genresList', {genres:generos})
        }
    )},
    detail: function (req,res){
        db.Genre.findByPk(req.params.id)
        .then(function(genero){
            res.render('genresDetail', {genre:genero})
        })},
    



}
   
module.exports=genresController;