// let consegue ler a variável com dados diferentes se for outro escopo 

let numero = 1
{
    let numero = 2 
    console.log(numero) //Ele vai exibir o valor da variável no escopo mais interno
}
console.log(numero)

// A diferença entre var e Let é que let tem um escopo a mais que é o bloco 