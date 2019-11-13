var Work = require('../models/works')
const mongoose = require('mongoose')

module.exports.listar = () => {
    return Work
        .find()
        .exec()
}

module.exports.consultarC = compositor => {
    return Work
        .find({compositor: compositor})
        .exec()
}

module.exports.consultarP = periodo => {
    return Work
        .find({periodo: periodo})
        .exec()
}

module.exports.consultarA = anoCriacao => {
    return Work
        .find({anoCriacao: anoCriacao})
        .exec()
}

module.exports.listarComp = () => {
    return Work
        .distinct('compositor')
        .exec()
}