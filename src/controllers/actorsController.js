const db = require('../database/models');

const actorsController= {

    list: function (req,res){
        db.Actor.findAll()
        .then(function(actores){
            res.render('actorsList', {actors:actores})
        }
    )},
    detail: function (req,res){
        db.Actor.findByPk(req.params.id)
        .then(function(actor){
            res.render('actorsDetail', {actors:actor})
        })},
    



}
   
module.exports=actorsController;