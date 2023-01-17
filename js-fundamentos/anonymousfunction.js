// Funções anônimas não recebem nome e não ficam na memória até ser chamada
// Só e criada no momento da execução 

// Tradicional 

function nome(){
    return "Olá"
}

/////////////////

// Como a Função não vai ficar na memória eu preciso atribuir a uma variável

let f = function(n1,n2){
    return n1+n2
}

console.log(f(10,5))