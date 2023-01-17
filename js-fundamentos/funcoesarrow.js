// Representar funções Anônimas
// let soma = function(n1,n2){
    // return n1+n2
//}
let soma = (v1,v2)=>{return v1+v2} // Eu pego o que está nos parâmetros e envio para o bloco de código

console.log(soma(1,2))

///////////// Quando eu tenho um valor apenas como parâmetro eu não preciso colocar parênteses

let valor = n=>{return n}
console.log(valor("Lucas"))