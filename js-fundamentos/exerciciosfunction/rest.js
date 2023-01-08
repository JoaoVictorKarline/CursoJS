// Parâmetros Rest ||  Criar uma função sem um número determinado de valores

function soma(...valores){ // Ele cria um Array com os dados que eu enviar nos parâmetros
    let soma_ = 0
    for(let i in valores){
        
        soma_ += valores[i]
    }
    return soma_
}

console.log(soma(3,2,1,1))