var Pub = require('../models/pubs')

module.exports.listar = () => {
    return Pub
        .find({},{id:1,title:1,year:1,type:1})
        .exec()
}

module.exports.consultar = id => {
    return Pub
        .findOne({id: id})
        .exec()
}

module.exports.tipos = () => {
    return Pub
        .distinct('type')
        .exec()
}

module.exports.consultarT = tipo => {
    return Pub
        .find({type: tipo})
        .exec()
}

module.exports.consultarTA = (tipo,ano) => {
    return Pub
        .find({$and: [{type: tipo},{year: {$gt: ano}}]})
        .exec()
}

module.exports.autores = () => {
    return Pub
        .distinct("authors.element")
        .exec()
}