let somar = valor => {
    let res = 0
    for (let pos in valor) {
        res += valor[pos]
    }
    return res

}

let soma = (...valores) => {
    

    return somar(valores) // Retorna o retorno da função somar
}

console.log(soma(10, 15,2,2,1,5))