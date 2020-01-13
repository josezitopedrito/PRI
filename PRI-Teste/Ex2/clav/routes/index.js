var express = require('express');
var router = express.Router();
const axios = require('axios')

router.get('/', function(req, res, next) {
  axios.get('http://localhost:3004/api/tipologias')
      .then(dados => {
        res.render('index', {lista: dados.data});
      })
      .catch(erro => {
        res.render('error', {error: erro})
      })
});

router.get('/tipologia/:id', function(req, res, next) {
  axios.get('http://localhost:3004/api/tipologias/' + req.params.id)
      .then(dados => {
        res.render('tipologia', {lista: dados.data});
      })
      .catch(erro => {
        res.render('error', {error: erro})
      })
});

router.get('/tipologia/:id/dono', function(req, res, next) {
  axios.get('http://localhost:3004/api/tipologias/' + req.params.id +'/intervencao/dono')
      .then(dados => {
        res.render('tipologia', {lista2: dados.data});
      })
      .catch(erro => {
        res.render('error', {error: erro})
      })
});

router.get('/tipologia/:id/participante', function(req, res, next) {
  axios.get('http://localhost:3004/api/tipologias/' + req.params.id +'/intervencao/participante')
      .then(dados => {
        res.render('tipologia', {lista2: dados.data});
      })
      .catch(erro => {
        res.render('error', {error: erro})
      })
});

router.get('/tipologia/:id/entidades', function(req, res, next) {
  axios.get('http://localhost:3004/api/tipologias/' + req.params.id +'/elementos')
      .then(dados => {
        res.render('tipologia', {lista2: dados.data});
      })
      .catch(erro => {
        res.render('error', {error: erro})
      })
});

module.exports = router;