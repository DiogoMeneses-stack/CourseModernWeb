// função factory part 2
function criarProduto(nome, Preco){
    return{
        nome,
        Preco,
        desconto:0.1 

    }
}

console.log(criarProduto('Notebook', 2199.49))

