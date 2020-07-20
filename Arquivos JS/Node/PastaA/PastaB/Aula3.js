// Sistema de Modulos: Require
// require é o método de importar no node 
const moduloA = require('../../Aula1')
console.log(moduloA.Ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

/*const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)*/