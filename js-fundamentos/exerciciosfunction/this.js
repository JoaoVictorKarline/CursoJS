// Destinguir variáveis

function aluno(nome,nota){
    //let nome = nome | Eu quero destinguir essas duas variáveis
    this.nome = nome // Este nome faz referência a esse elemento (Como se fosse uma variável que vai receber o valor dentro do parâmetro nome)

    this.nota = nota

    return `Olá ${nome} Sua nota foi de ${nota}`
}

console.log(aluno('João',10))