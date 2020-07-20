const contadorA = require('./Aula6')
const contadorB = require('./Aula6')

const contadorC = require('./Aula6B')()
const contadorD =  require('./Aula6B')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
