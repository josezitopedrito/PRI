var express = require('express');
var router = express.Router();

const axios = require('axios')

router.get('/tipologias', function(req, res, next) {
  
    axios.get('http://clav-api.dglab.gov.pt/api/tipologias?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
      .then(function(dados){
        res.jsonp(dados.data)
      })
      .catch(e => res.jsonp(e))
});

router.get('/tipologias/:id/intervencao/dono',function(req,res,next){
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.id + '/intervencao/dono?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
      .then(function(dados){
        res.jsonp(dados.data)
      })
      .catch(e => res.jsonp(e))
})

router.get('/tipologias/:id/intervencao/participante',function(req,res,next){
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.id + '/intervencao/participante?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
      .then(function(dados){
        res.jsonp(dados.data)
      })
      .catch(e => res.jsonp(e))
})

router.get('/tipologias/:id/elementos',function(req,res,next){
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.id + '/elementos?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
      .then(function(dados){
        res.jsonp(dados.data)
      })
      .catch(e => res.jsonp(e))
})

router.get('/tipologias/:id',function(req,res,next){
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.id + '?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
      .then(function(dados){
        res.jsonp(dados.data)
      })
      .catch(e => res.jsonp(e))
})

router.get('/entidades/:id/tipologias',function(req,res,next){
  axios.get('http://clav-api.dglab.gov.pt/api/entidades/' + req.params.id + '/tipologias?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
      .then(function(dados){
        res.jsonp(dados.data)
      })
      .catch(e => res.jsonp(e))
})

router.get('/entidades/:id',function(req,res,next){
  axios.get('http://clav-api.dglab.gov.pt/api/entidades/' + req.params.id + '?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
      .then(function(dados){
        res.jsonp(dados.data)
      })
      .catch(e => res.jsonp(e))
})

module.exports = router;
