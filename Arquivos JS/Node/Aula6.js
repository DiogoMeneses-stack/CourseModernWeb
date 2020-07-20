// Intância Única vs nova instância
// node faz cache dos módulos 
module.exports = {
    valor: 1,
    inc(){
        this.valor++
    }
}