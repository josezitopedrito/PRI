var express = require('express');
var router = express.Router();

var Pubs = require('../controllers/pubs')

router.get('/pubs', function(req, res, next) {
  if(req.query.type && req.query.year){
    Pubs.consultarTA(req.query.type,req.query.year)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
  }
  else if(req.query.type){
    Pubs.consultarT(req.query.type)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
  }
  else{
    Pubs.listar()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
  }
});

router.get('/pubs/:id', function(req, res, next) {
  Pubs.consultar(req.params.id)
          .then(dados => res.jsonp(dados))
          .catch(erro => res.status(500).jsonp(erro))
});

router.get('/types', function(req, res, next) {
  Pubs.tipos()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/autores', function(req, res, next) {
  Pubs.autores()
        .then(function(dados){
            resposta = dados
            resposta.sort()
            res.jsonp(resposta)
        }
        )
        .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;
