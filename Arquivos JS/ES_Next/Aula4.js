// Operador Rest e Spread => ...
// usar rest com parâmetro em função 

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12489.99 }
const clone = { ativo: true, ...funcionario }

console.log(clone)

// usar spread no array
const grupoA = [ 'João', 'Pedro', 'Gloria']
const grupoFinal = [ 'Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)