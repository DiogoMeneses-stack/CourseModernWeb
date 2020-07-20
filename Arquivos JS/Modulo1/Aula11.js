// null e undefined

let valor //não inicializa ('Undefined')
console.log(valor)


valor = null //não aponta para nenhum endereço de memória 
console.log(valor)//('null')
//console.log(valor.toString()) //erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar de atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null//sem preco
console.log(!!produto.preco)
console.log(produto)