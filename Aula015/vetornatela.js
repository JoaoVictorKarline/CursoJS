let valores = [9,2,3,4,8,8,2]

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
*/

/*
for(var c = 0; c<valores.length; c++){
    console.log(valores[c])
}
*/

for(let pos in valores){ // Para cada posição dentro de Valores 
    console.log(valores[pos]) // Escreva conteúdo da posição
}