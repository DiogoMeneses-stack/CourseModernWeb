// Classe part 1
class Lacamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor

    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.Lacamento = []
    }
    addlancamentos(...Lacamento) {
        Lacamento.forEach(l => this.Lacamento.push(l))
    }
    sumario() {
        let valorCosolidado = 0
        this.Lacamento.forEach( l=> {
            valorCosolidado += l.valor
        })
        return valorCosolidado
    }
}

const salario = new Lacamento('Salario', 45000)
const Contadeluz = new Lacamento('Luz', -200)

const contas = new CicloFinanceiro(6, 2018)
contas.addlancamentos(salario, Contadeluz)
console.log(contas.sumario())