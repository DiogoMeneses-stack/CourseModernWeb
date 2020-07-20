//operadores destructuring part 1

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1080
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const {nome: n, idade: i}=pessoa
console.log(n, i)

const { sobrenome, benHumorada = true}=pessoa
console.log(sobrenome, benHumorada)

const {endereco: { logradouro, numero, cep} }=pessoa
console.log(logradouro, numero, cep)
