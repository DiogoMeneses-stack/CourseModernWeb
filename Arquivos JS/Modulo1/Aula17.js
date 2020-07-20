//usando Let part 1

let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =',numero)
/*a diferença 
entre let e var é que 
var tem escopo global 
e de funcao e escopo de 
bloco, e o do let não possui blocos
*/
