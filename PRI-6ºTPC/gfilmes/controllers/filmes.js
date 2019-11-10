var Filme = require('../models/filmes')
const mongoose = require('mongoose')

module.exports.listar = () => {
    return Filme
        .find()
        .exec()
}

module.exports.consultar = id => {
    return Filme
        .findOne({_id: id})
        .exec()
}

module.exports.contar = () => {
    return Filme
        .countDocuments()
        .exec()
}

module.exports.inserir = filme => {
    filme._id = mongoose.Types.ObjectId()
    var elenco = filme.cast.filter(function (eli) {
        return eli != '';
    });
    filme.cast = elenco;
    var cat = filme.genres.filter(function (el) {
        return el != '';
    });
    filme.genres = cat;
    var novo = new Filme(filme)
    return novo.save()
}

module.exports.eliminar = id => {
    return Filme
        .deleteOne({_id: id})
        .exec()
}