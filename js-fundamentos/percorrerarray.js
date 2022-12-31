// Formas de Percorrer Array

let a = [1,2,3,4,5]

for(let pos = 0; pos<a.length; pos++){
    console.log(a[pos])
}

let b = [6,7,8,9,10]

for(let pos in b){ // Para cada posição de pos ele executa o bloco de código
    console.log(b[pos])
}
