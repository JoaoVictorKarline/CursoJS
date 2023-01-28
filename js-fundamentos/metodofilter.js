// Método filter serve para filtrar determinados elementos do array e retornar apenas os elementos que eu quero 


// Retornar maiores de 18

let idades = [14,33,21,23,18,19,12,14,13]


// let filtro = (valor)=>{
//     if(valor >=18){
//         return valor
//     }
// }

let maiores = idades.filter((elemento)=>{ // Assim como eu posso adicionar a função como argumento posso acrescentar a função diretamente como argumento em forma anônima

    if(elemento>=18){
        return elemento
    }

}) 

let menores = idades.filter((elemento)=>{
    if(elemento<18){
        return elemento
    }
})

console.log(idades)
console.log(maiores)
console.log(menores)

let impares = idades.filter((ele)=>{
    if(ele%2==1){
        return ele
    }
})

console.log(impares)

