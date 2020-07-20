console.log(soma(3, 4))
// tipos de declaração

//function decalration
function soma(x, y){
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

//named function expression
const nult = function mult(x, y){
    return x * y
}
console.log(nult(3, 4))
