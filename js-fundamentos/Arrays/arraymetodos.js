let pilotos = ['Ayrton', 'Gabriel', 'Felipe', 'Miguel']
let ultimo = pilotos.pop() // Retira o último elemento do Array
console.log(ultimo) 
console.log(pilotos)

pilotos.push('João') // Adiciona um valor no próximo índice do Array
console.log(pilotos)

pilotos.shift() // Retira o Primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Massa') // Adiciona um Valor ao array igual ao Push porém na primeira posição
console.log(pilotos)

pilotos.splice(3,1) // No índice 3 eu removo um elemento
console.log(pilotos)

let novospilotos = pilotos.slice(1) // cria um novo array a partir do índice 1
console.log(novospilotos)

let novospilotos02 = pilotos.slice(0,3) // Ele vai criar um novo Array do índice 0 até o 3 (Ele retorna o elemento do índice 0 mas não retorna o elemento do índice 3)
console.log(novospilotos02)