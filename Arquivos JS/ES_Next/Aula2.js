// revisão part 2

// Arrow function 
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametros default 
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais Forte')

// operador rest 
    function total1(...numeros) {
        let total1 = 0
        numeros.forEach (n => total1 += n)
        return total1 
    }
console.log(total1(2, 3, 4, 5))
