// Funções Anonimas
const soma = function (x, y) { //função anonima é uma função sem nome
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(4, 3)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x,y){
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)

const Pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

Pessoa.falar()