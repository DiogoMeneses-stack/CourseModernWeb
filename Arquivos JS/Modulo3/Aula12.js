// Funções CallBack part 1
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice+ 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach((fabricante => console.log(fabricante)))
// O callback é uma função que será chamada em um evento


