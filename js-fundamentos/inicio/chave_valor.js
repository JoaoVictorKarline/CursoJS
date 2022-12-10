const a = 'João'

function exec(){
    const a = 'Victor'
    return a
}
console.log(a)
console.log(exec())

//Const tem o escopo de Let

const client = {
    nome: 'João Victor',
    numero: 42984394788,
    peso: 90
}

console.log(`O cliente ${client.nome} tem ${client.peso} KG` )

// Objeto são grupos de chave seus atributos e valor