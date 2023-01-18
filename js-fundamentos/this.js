function aluno(nome, nota){
    // let vnome = nome // Como eu faço a distinção dessa variável para o parâmetro
    // Eu posso colocar o nome da variável diferente mas se eu quiser usar o mesmo nome eu uso o This
    this.nome = nome // Como se fosse uma variável para a função aluno que recebe o valor do parâmetro nome
    this.nota = nota
    console.log(nome)
    console.log(nota)
}

aluno('João', 10)