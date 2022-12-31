let a = [1,2,3,4,5]

for(let i = 0; i<a.length;i++){
    console.log(a[i])
}

// Mostra cada posição do Vetor sem as Chaves

let b = [6,7,8,9,10]

for(let i in b){ // Variável I percorre o Vetor b || Para cada posição dentro de b ele executa o bloco
    console.log(b[i])
}

console.log(b.indexOf(9)) // Procura o valor 9 no Vetor b e retorna a chave do elemento 
// Se não tiver o valor ele retorna -1

