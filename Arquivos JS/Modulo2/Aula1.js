// estrutura if ou condicionais part 1
function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('parabéns')
    
    } 
}

soBoaNoticia(8.1)
soBoaNoticia(9.0)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('é verdade... '+ valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo('')
seForVerdadeEuFalo('7')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})