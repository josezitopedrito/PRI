const express = require('express');
const router = express.Router();

var Works = require('../controllers/works')

router.get('/works', function(req, res){
    if(req.query.compositor){
        Works.consultarC(req.query.compositor)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if(req.query.periodo){
        Works.consultarP(req.query.periodo)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if(req.query.anoCriacao){
        Works.consultarA(req.query.anoCriacao)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else{
        Works.listar()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
})
router.get('/compositores', function(req, res){
    Works.listarComp()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
})

router.get('/compositores/:nome', function(req, res){
    Works.consultarC(req.params.nome)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router