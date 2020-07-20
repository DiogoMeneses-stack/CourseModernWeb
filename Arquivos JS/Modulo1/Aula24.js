//Par nome/valor 
const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'fala'//contexto léxico 2
    return saudacao
}

//Objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logdouro: 'rua muito legal',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)

