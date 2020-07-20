// erro try/catch/throw
function tratarErroLancar(erro) {
    //throw new Error('...')
    throw 10
    throw true
    throw 'mensagem'
}

function imprimirnomeGritado(obj) {
    try{
    console.log(obj.name.toUpperCase() * '!!!')
    } //é um bloco que potencialmente pode gerar erro 
    catch (e) {
        tratarErroLancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = {nome: 'Roberto'}
imprimirnomeGritado(obj)
