function teste() {
    var test = 23 // Essa variável só posso usar dentro da function 
    console.log(test) //Dentro do Bloco consigo executar e mostrar
}

teste()
//console.log(test) Fora da Função não consigo executar a variável criada dentro do escopo

var teste02 = 125 // Foi criado fora de uma função então é uma variável global onde eu posso usar em qualquer escopo

function teste2() {
    return teste02 + 10
}

console.log(teste2())