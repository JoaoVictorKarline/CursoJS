// Bloco de código que executa uma determinada tarefa 
// Cada bloco executa uma função diferente
// Ex: Função de somar, função de multiplicar...
// Como a linha de montagem de uma empresa que possui vários robôs e cada um tem uma função
// A função só é executada quando é invocada

function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let a = parimpar(10)
console.log(a)

function fatorial(b) {
    let fatorial = 1
    for (let pos = b; pos > 1; pos--) {
        fatorial = fatorial * pos
    }
    return fatorial
}

let fac = fatorial(3)
console.log(fac)

function vazia() {
    console.log('Essa função não possui nenhum Parâmetro')
}

vazia() // Fiz a chamada da função 

function comprarleite(dinheiro) {
    let leite = 7
    if (dinheiro >= leite) {
        return `Leite comprado. Seu troco é de ${dinheiro - leite}`

    } else {
        return 'Não foi possível comprar o leite'
    }
}

let compra = comprarleite(10)
console.log(compra)


function soma(n1,n2,n3){
    let total = n1+n2+n3
    return total
}

console.log(soma(1,6,3)) // Eu posso adicionar quantos parâmetros eu quiser

