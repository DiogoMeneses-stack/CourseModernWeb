// node vs browser
let a = 3

global.b = 123

this.c = 456
this.d = false
this.e= 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)

// criando variaveis sem let e var
abc = 3 //não fazer isso
console.log(global.abc)
//module.exports = {e: 456, d: false, g: 'teste'}