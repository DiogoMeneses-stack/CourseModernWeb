// tagged template part 2

function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor: `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

function dolar(partes, ...valores){
    resultado
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor: `U$${valor.toFixed(3)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)
console.log(dolar`1x de ${preco} ou 3x de ${precoParcela}.`)