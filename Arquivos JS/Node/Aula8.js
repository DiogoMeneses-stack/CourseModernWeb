// Entendendo o This
// This está publico
console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    //this privado só para essa função
    console.log('Dentro de Função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

}

logThis()