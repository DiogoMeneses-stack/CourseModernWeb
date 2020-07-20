const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

// Cria um arquivo com extensão JSON
fs.writeFile(__dirname + '/Aula13B.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo !!')
})