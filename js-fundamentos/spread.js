// Quebrar um array, quando eu quero transformar dados em um array

let n1 = [10,20,30]
let n2 = [40,50,60]
let n3 = [1,6,77,7,6]
let n4 = [...n1] // Espalhar os valores de n1 para o n4
let n5 = [...n1,...n2]

console.log(n1)
console.log(n2)
console.log(n3)
console.log(n5)

/////////////////////

let soma = (v1,v2,v3)=>{return v1+v2+v3}
let valores = [1,3,9]
console.log(soma(...valores)) // Espalho os valores para cada parâmetro da função