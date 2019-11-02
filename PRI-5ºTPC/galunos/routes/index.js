var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var nanoid = require('nanoid')

var myBD = __dirname + "/../data/alunos.json"

/* GET home page. */
router.get('/', function(req, res) {
  jsonfile.readFile(myBD, (erro, dados) => {
    if(!erro){
        res.render('index', {lista: dados})              
    }
    else{
        res.render('error', {error: erro})  
    }
  }) 
})

router.get('/:idAluno',function(req,res){
  var num = req.params.idAluno
  jsonfile.readFile(myBD, (erro, alunos) => {
    if(!erro){
      var index = alunos.findIndex(c => c.identificador == num)
      if(index > -1){
        var aluno = alunos[index]
        res.render('aluno', {al: aluno})
      }              
    }
    else{
        res.render('error', {error: erro})  
    }
  }) 
})

router.post('/', function(req, res) {
    var registo = req.body
    registo['id'] = nanoid()
    jsonfile.readFile(myBD, (erro, alunos)=>{
        if(!erro){
            alunos.push(registo)
            jsonfile.writeFile(myBD, alunos, erro => {
                if(erro) console.log(erro)
                else console.log('Registo gravado com sucesso.')
            })
        }
        res.render('index', {lista: alunos})
    })
})

router.post('/:idAluno/notas', function(req, res) {
  var num2 = req.params.idAluno
  var registo = req.body
  registo['id'] = nanoid()
  jsonfile.readFile(myBD, (erro, alunos)=>{
      if(!erro){
        var index = alunos.findIndex(c => c.identificador == num2)
        if(index > -1){
          var aluno = alunos[index]
          alunos.splice(index,1)
          aluno.notas.push(registo)
          alunos.push(aluno)
          jsonfile.writeFile(myBD, alunos, erro => {
              if(erro) console.log(erro)
              else console.log('Registo gravado com sucesso.')
          })
          res.render('aluno', {al:aluno})
        }
      }else{
        res.render('error', {error: erro})
      }
      
  })
})


router.delete('/:idAluno', function(req, res) {
  var id = req.params.idAluno
  jsonfile.readFile(myBD, (erro, alunos)=>{
    if(!erro){
      var index = alunos.findIndex(c => c.id == id)
      if(index > -1){
        alunos.splice(index, 1)
        jsonfile.writeFile(myBD, alunos, erro => {
          if(erro) console.log(erro)
          else console.log('Registo removido com sucesso.')
        })
      }
    }
    res.render('index', {lista: alunos})
  })
})

router.delete('/:idAluno/notas/:indicador', function(req, res) {
  var num3 = req.params.idAluno
  jsonfile.readFile(myBD, (erro, alunos)=>{
    if(!erro){
      var index = alunos.findIndex(c => c.identificador == num3)
      if(index > -1){
        var aluno = alunos[index]
        alunos.splice(index, 1)
        var num4 = req.params.indicador
        var ind = aluno.notas.findIndex(c => c.indicador == num4)
        aluno.notas.splice(ind,1)
        alunos.push(aluno)
        jsonfile.writeFile(myBD, alunos, erro => {
          if(erro) console.log(erro)
          else console.log('Registo removido com sucesso.')
        })
      }
    }
    res.render('aluno', {al: aluno})
  })
})

module.exports = router;
