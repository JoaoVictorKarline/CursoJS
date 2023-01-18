// Yield é como se fosse um retorno

/*function* cores(){
    yield 'Green'
    yield 'Red'
    yield 'Blue'
}

const itc = cores()
console.log(itc) // Retorna um objeto gerador na primeira chamada
console.log(itc.next().value) // Próxima execução
console.log(itc.next().value) // Continua da onde parou
console.log(itc.next().value)*/

function* perguntas(){
    const nome = yield 'Qual seu Nome?'
    const esporte = yield 'Qual seu esporte favorito ?'
    return `Seu nome é ${nome} e esporte é ${esporte}`
}

const it = perguntas()
console.log(it.next().value)
console.log(it.next('Bruno').value)
console.log(it.next('Futebol').value)