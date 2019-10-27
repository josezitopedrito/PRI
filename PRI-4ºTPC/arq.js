var http = require('http')
var fs = require('fs')
var i
var myserver = http.createServer(function (req, res) {
    console.log(req.method + ' ' + req.url)
    var str = req.url.split('/')
    var num = str[str.length - 1]
    var mus = str[str.length - 2]
    console.log(num)
    //console.log('STR:' + mus)
    if(req.method == 'GET'){
        if(req.url == '/w3.css'){
            fs.readFile('w3.css', (erro, dados)=>{
                if(!erro){
                    res.writeHead(200, {'Content-Type':'text/css'}) 
                    res.write(dados)
                }
                else {
                    res.writeHead(200, {'Content-Type':'text/plain'}) 
                    res.write('Erro na leitura do CSS...')
                }
                res.end() 
            });
        }
        else if( num == 'doc2html.xsl'){
            console.log("slicinhas " + str.slice(1))
            fs.readFile('doc2html.xsl', (erro, dados) => {
                if(!erro){
                    res.writeHead(200, {'Content-Type': 'text/xml'})
                    res.write(dados)
                    res.end()
                } else {
                    res.writeHead(200, {'Content-Type':'text/plain'}) 
                    res.write('Erro: ' + erro)
                    res.end()
                }
            });
        }
        else if(parseInt(num) < 449 && parseInt(num) > 0 && mus == 'musica'){
            console.log(num)
            console.log(req.url)
            i = num
            fs.readFile('data/doc' + num + '.xml', (erro, dados) => {
                if(!erro){
                    res.writeHead(200, {'Content-Type': 'text/xml'})
                    console.log(dados)
                    res.write(dados)
                    res.end()
                } else {
                    res.writeHead(200, {'Content-Type':'text/plain'})
                    console.log(erro)
                    res.write('Erro: ' + erro)
                    res.end() 
                }
            });
            
        }
        else {
            res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})
            res.end('Erro: Pedido não suportado [' + req.url + ']');
        }
    }
    else {
        res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})
        res.end('Erro: Método não suportado [' + req.method + ']');
    }
})

myserver.listen(3021)

console.log('Servidor à escuta na porta 3021...');