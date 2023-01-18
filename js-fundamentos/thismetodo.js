function aluno(nome,nota){
    this.nome = nome
    this.nota = nota

    this.dadoarrow = function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },3000) // Gera um atraso na execução 
    }
}

let aluno01 = new aluno("João", "10")
aluno01.dadoarrow()