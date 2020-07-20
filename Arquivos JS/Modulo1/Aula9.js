//Array ou Vetores é uma estrutura heterogênia

const valores = [7.7 , 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])//retorna underfiened

valores[4]=10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())//para tirar atributo de um objeto
delete valores[0] //deleta o array na posição 0
console.log(valores)

console.log(typeof valores)