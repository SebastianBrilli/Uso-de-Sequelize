const db = require('../database/models');

const moviesController= {

    list: function (req,res){
        db.Movie.findAll()
        .then(function(peliculas){
            res.render('moviesList', {movies:peliculas})
        }
    )},
    detail: function (req,res){
        db.Movie.findByPk(req.params.id)
        .then(function(pelicula){
            res.render('moviesDetail', {movie:pelicula})
        })},
    new: function(req,res){
        db.Movie.findAll({
            order: [['release_date', 'DESC']]
        })
        .then(function(peliculas){
            res.render('newestMovies', {movies:peliculas})
        })},
    recomended: function(req,res){
        db.Movie.findAll({
                order: [['rating', 'DESC']],
                limit: 5
             })
        .then(function(peliculas){
            res.render('recommendedMovies', {movies:peliculas})
        })}



}
   
module.exports=moviesController;