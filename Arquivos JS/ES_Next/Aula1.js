// Revisão part 1

// let => variável 
// const => constante
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String 
const produto = 'ipad'
console.log(`${produto} é caro`)

// Destruturing
const [L, e, ...tras] = 'Cod3r'
console.log(L, e, tras)

const[x, y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)