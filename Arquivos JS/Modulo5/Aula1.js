//     Visão geral Array

console.log( typeof Array, typeof new Array, typeof[] )

let aprovado = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovado)

aprovado = [ 'Bia', 'Carlos', 'Ana']

console.log(aprovado[0])
console.log(aprovado[1])
console.log(aprovado[2])
console.log(aprovado[3])

aprovado[3] = 'Paulo'
aprovado.push('Abia')
console.log(aprovado.length)

aprovado[9] = 'Rafael'
console.log(aprovado.length)
console.log(aprovado[8] === undefined)

console.log(aprovado)
aprovado.sort() // altera o dado no array
console.log(aprovado)

delete aprovado[1]
console.log(aprovado[1])
console.log(aprovado[2])

aprovado = ['Bia', 'Carlos', 'Ana']
aprovado.splice(1, 2, 'Elemento1', 'Elemento2') // funçãpo para excluir indice
console.log(aprovado)

